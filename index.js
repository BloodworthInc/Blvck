import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Crown Linguistics</title>
        <meta name="description" content="Professional Translation Services & Corporate Info" />
      </Head>

      {/* Navbar */}
      <nav className="fixed w-full bg-black text-gray-400 p-4 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">Crown Linguistics</div>
          <div>
            <a href="#about" className="px-3 hover:text-white">About</a>
            <a href="#services" className="px-3 hover:text-white">Services</a>
            <a href="#languages" className="px-3 hover:text-white">Languages</a>
            <a href="#reviews" className="px-3 hover:text-white">Reviews</a>
            <a href="#contact" className="px-3 hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
          <h1 className="text-5xl font-bold">Welcome to Crown Linguistics</h1>
          <p className="mt-4 text-xl">Professional Translation Services</p>
          <button className="mt-6 px-6 py-3 bg-gray-400 text-black font-bold rounded hover:bg-gray-300">
            Learn More
          </button>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen p-10 bg-black text-gray-200">
          <h2 className="text-4xl font-bold">About Crown Linguistics</h2>
          <p className="mt-4 text-lg">
            Crown Linguistics, a division of Bloodworth Enterprises, is dedicated to providing top-notch translation services. Our mission is to bridge language barriers and ensure clear, accurate communication across the globe. With a team of professional linguists, we guarantee high-quality translations for all your needs, whether for personal, business, or technical purposes. We pride ourselves on our attention to detail and our commitment to excellence.
          </p>
        </section>

        {/* Services & Prices Section */}
        <section id="services" className="min-h-screen p-10 bg-gray-800 text-white">
          <h2 className="text-4xl font-bold">Our Services & Prices</h2>
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-gray-700 rounded">
              <h3 className="text-xl font-semibold">Standard Translation</h3>
              <p>$0.10 per word</p>
            </div>
            <div className="p-4 bg-gray-700 rounded">
              <h3 className="text-xl font-semibold">Certified Translation</h3>
              <p>$0.15 per word</p>
            </div>
            <div className="p-4 bg-gray-700 rounded">
              <h3 className="text-xl font-semibold">Technical Translation</h3>
              <p>$0.20 per word</p>
            </div>
          </div>
        </section>

        {/* Supported Languages Section */}
        <section id="languages" className="min-h-screen p-10 bg-black text-gray-200">
          <h2 className="text-4xl font-bold">Supported Languages</h2>
          <p className="mt-4 text-lg">
            Choose from a wide range of languages to suit your needs.
          </p>
          <ul className="mt-4 list-disc list-inside">
            <li>English</li>
            <li>Spanish</li>
            <li>French</li>
            <li>German</li>
            <li>Chinese</li>
            <li>Japanese</li>
            <li>...and more</li>
          </ul>
        </section>

        {/* Customer Reviews Section */}
        <section id="reviews" className="min-h-screen p-10 bg-gray-800 text-white">
          <h2 className="text-4xl font-bold">Customer Reviews</h2>
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-gray-700 rounded">
              <p>"Great service and fast turnaround!"</p>
              <p className="mt-2 italic">- Customer A</p>
            </div>
            <div className="p-4 bg-gray-700 rounded">
              <p>"Professional and reliable translation."</p>
              <p className="mt-2 italic">- Customer B</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen p-10 bg-black text-gray-200">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="mt-4 text-lg">
            We would love to hear from you. Reach out to us through any of the following methods:
          </p>
          <ul className="mt-4 list-disc list-inside">
            <li>Email: <a href="mailto:info@crownlinguistics.com" className="text-blue-400 hover:underline">info@crownlinguistics.com</a></li>
            <li>Support: <a href="mailto:support@crownlinguistics.com" className="text-blue-400 hover:underline">support@crownlinguistics.com</a></li>
            <li>Personal: <a href="mailto:bloodworth@crownlinguistics.com" className="text-blue-400 hover:underline">bloodworth@crownlinguistics.com</a></li>
            <li>Phone: 785-871-7256</li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/emanuel-bloodworth-26b872355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-blue-400 hover:underline">Emanuel Bloodworth</a></li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 p-4 text-center">
        © {new Date().getFullYear()} Crown Linguistics & Bloodworth Enterprises. All rights reserved.
      </footer>
    </>
  );
}