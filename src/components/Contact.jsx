import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact(props) {
  const [owner, setOwner] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchOwner = async () => {
      try {
        const res = await fetch(`https://rentify-backend-7zr8kctt9-yashs-projects-0cbfb7bb.vercel.app/api/user/${props.listing.userRef}`);
        const data = await res.json();

        setOwner(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOwner();
  }, [props.listing.userRef]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      {owner && (
        <div className="flex flex-col gap-2">
          <p>
            Contact: <span className="font-semibold">{owner.firstName}</span> for{" "}
            <span className="font-semibold">{props.listing.name}</span>
          </p>
          <textarea
            className="w-full border p-3 rounded-lg"
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={handleChange}
            placeholder="Type your message here..."
          ></textarea>

          <Link
            to={`mailto:${owner.email}?subject=Regarding ${props.listing.name}&body=${message}`}
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover: opacity-95"
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}
