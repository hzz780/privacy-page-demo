import Image from "next/image";
import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Data Collection and Usage</h2>
        <p>We value your privacy and are committed to protecting your personal information. Our application does not collect, store, or process any user data.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Data Usage</h2>
        <p>Since we do not collect any user data, we do not engage in any form of data processing, storage, or usage.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Data Storage and Protection</h2>
        <p>As we do not collect any user data, there is no data storage or protection involved.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">User Rights</h2>
        <p>Since no user data is collected, you do not need to worry about data access, updates, or deletion.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Protection of Minors</h2>
        <p>Our service does not collect any user data, including data from minors.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Policy Changes</h2>
        <p>If there are any changes to our privacy policy, we will notify users through in-app notifications or via email.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p>If you have any questions about our privacy policy, please contact us at:</p>
        <ul>
          <li>Email: <a href="mailto:developer@aelf.io" className="text-blue-600">developer@aelf.io</a></li>
        </ul>
      </section>
    </div>
  );
}
