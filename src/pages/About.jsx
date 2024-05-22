import { Link } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai'

export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-red-700 font-extrabold text-xl">**(Test about us content)**</h1>
      <div className="flex flex-col w-full">
        <h1 className="text-3xl font-bold m-4 text-indigo-800">About Us</h1>
        <p className="m-4 text-slate-700">
          Welcome to <span className="text-indigo-700">Rentify</span>, your
          premier destination for all things real estate. We&apos;re not just
          another real estate website, we&apos;re your dedicated partner in
          finding the perfect property, whether it&apos;s your dream home, a
          lucrative investment, or a cozy rental.
        </p>
      </div>
      <h1 className="text-3xl font-bold m-4 text-indigo-800">Who We Are</h1>
      <p className="m-4 text-slate-700">
        At <span className="text-indigo-700">Rentify</span>, we are
        passionate about connecting people with their ideal properties. Our team
        consists of experienced real estate professionals, web developers, and
        customer service experts, all dedicated to making your property journey
        as smooth and successful as possible.
      </p>
      <h1 className="text-3xl font-bold m-4 text-indigo-800">
        What Sets Us Apart
      </h1>
      <div>
        <li className="m-4 text-slate-700">
          Comprehensive Listings: We offer an extensive database of real estate
          listings, featuring a wide range of properties, from luxurious estates
          to affordable starter homes. Whether you&apos;re a first-time buyer or
          a seasoned investor, you&apos;ll find options that suit your needs.
        </li>
        <li className="m-4 text-slate-700">
          User-Friendly Interface: Our website is designed with your convenience
          in mind. You can easily search for properties, set up alerts, and
          browse through high-quality images and detailed property descriptions.
        </li>
        <li className="m-4 text-slate-700">
          Expert Guidance: Our team of real estate experts is available to
          answer your questions, provide market insights, and assist you
          throughout your property search, purchase, or sale.
        </li>
        <li className="m-4 text-slate-700">
          Local Insights: We understand that location matters. That&apos;s why
          we provide detailed information about neighborhoods, schools,
          amenities, and local market trends to help you make informed
          decisions.
        </li>
        <li className="m-4 text-slate-700">
          Trust and Integrity: Trust is the foundation of every real estate
          transaction. We prioritize honesty, transparency, and ethical
          practices in all our interactions.
        </li>
      </div>
      <h1 className="text-3xl font-bold m-4 text-indigo-800 w-60">
        Our Mission
      </h1>
      <p className="m-4 text-slate-700">
        Our mission at <span className="text-indigo-700">Rentify</span> is to
        empower individuals and families to find their perfect place to call
        home. Whether you&apos;re looking for a cozy apartment, a spacious
        house, or a smart investment opportunity, we&apos;re here to guide you
        through the real estate landscape.
      </p>
      <h1 className="text-3xl font-bold m-4 text-indigo-800">How We Work</h1>
      <div>
        <li className="m-4 text-slate-700">
          Browse Listings: Start your property search by browsing through our
          vast listings. You can filter results based on location, price,
          property type, and more.
        </li>
        <li className="m-4 text-slate-700">
          Personalized Support: Our team is available to provide personalized
          guidance, answer questions, and offer insights to help you make
          informed decisions.
        </li>
        <li className="m-4 text-slate-700">
          Property Insights: Get a deeper understanding of properties through
          detailed descriptions, high-quality photos, and virtual tours.
        </li>
        <li className="m-4 text-slate-700">
          Market Trends: Stay updated on market trends, pricing data, and
          neighborhood insights to make informed decisions.
        </li>
        <li className="m-4 text-slate-700">
          Secure Transactions: Our website ensures secure and seamless
          transactions, whether you&apos;re buying, selling, or renting.
        </li>
      </div>
      <h1 className="text-3xl font-bold m-4 text-indigo-800">Contact Us</h1>
      <p className="m-4 text-slate-700">
        Thank you for choosing{" "}
        <span className="text-indigo-700">Rentify</span> as your trusted real
        estate partner. We look forward to helping you make your real estate
        dreams a reality.
      </p>
      <div className="flex justify-center">
        <Link to={'/'} className="border rounded-3xl text-center bg-indigo-700 text-white p-3 m-4">
          Get Started &gt;
        </Link>
        <Link to={'/profile'} className="flex items-center border rounded-3xl text-center bg-green-700 text-white p-3 m-4">
          Profile &nbsp; <AiOutlineUser />
        </Link>
      </div>
    </div>
  );
}
