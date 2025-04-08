
import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Footer from '../components/Footer';
import { Check, Info, AlertCircle, FileText } from 'lucide-react';

const Information = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-1">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Information</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero section */}
        <div className="bg-gradient-to-r from-gray-900 to-black text-white p-8 md:p-12 rounded-lg mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">RentEverything.shop</h1>
          <p className="text-lg md:text-xl max-w-3xl mb-6">
            Get ready to RentEverything.shop - As the No.1 on-line Retail Vendor Portal, we're here to help you find the best in this business. 
            The daily hustle of buying things you'll rarely use can be solved by renting. 
            That's why we're here for you.
          </p>
          <button className="bg-rentev-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition duration-300">
            Learn More
          </button>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">RentEverything.shop</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Privacy Policy – RentEverything.shop</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <p>Confidentiality of Data – We respect your privacy, personal details and any information about our website visitors are kept securely and confidentially.</p>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <p>Use of Information – This refers to how we're using information collected, used and stored. We are serious about data security.</p>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <p>Information Sharing – When it comes to providing information to third-parties, it may be done legally, respectfully for the benefit of our clients.</p>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <p>Privacy Controls – This refers to whether or Operational details about how our website administer to what data goes in or personal.</p>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-black text-white p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">Your trusted and reliable RentEverything.shop</h3>
              <button className="bg-rentev-orange hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 mt-4">
                Terms and Conditions - RentEverything.shop Rules
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Terms and Conditions</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <p>By using Multi-Rental Everything shop, you agree to adhere to these trading and conditions.</p>
                </li>
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <p>All rentals must be used responsibly and returned in the condition it was provided.</p>
                </li>
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <p>Customers must provide accurate information during the rental process to ensure a smooth rental experience.</p>
                </li>
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <p>Rental fees must be paid upfront, and late returns may result in additional charges.</p>
                </li>
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <p>Reservations for right to refuse service or cancel orders at our discretion.</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Refund and Insurance Policy - RentEverything.shop</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-rentev-orange mr-2 mt-0.5" />
                  <p>Each article we rent has the cancellation terms of which 50 hours before the rental start date.</p>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-rentev-orange mr-2 mt-0.5" />
                  <p>You will/will still be provided by face-consultations, verify, ensure, or review rental services.</p>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-rentev-orange mr-2 mt-0.5" />
                  <p>If an item is defective or not described, customers must report the issue within 24 hours for a possible replacement or refund.</p>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-rentev-orange mr-2 mt-0.5" />
                  <p>Customers are responsible for any damage, loss, or theft of rented items during the rental period.</p>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-rentev-orange mr-2 mt-0.5" />
                  <p>Optional insurance may be available to cover accidental damage, but it does not cover negligence or misuse.</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Insurance Policy Details</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <p>If items are returned damaged, the customer agrees to cover the full cost of repair, or replacement for damaged or lost items.</p>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <p>Each article if insured will be protected against damage. Payment fees on the original insurance method.</p>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <p>RentEverything.shop reserves the right to assess damage costs and approve/deny refund eligibility after inspection.</p>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <p>Claims for refunds or insurance must be submitted with proper documentation within the specified timeframe.</p>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <p>By renting from us, you acknowledge and accept the full Rental Insurance Policy.</p>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-orange-500 text-white p-6 rounded-lg mb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Annual Reports</h3>
              <div className="flex justify-center space-x-4">
                <button className="bg-white text-purple-700 hover:bg-gray-100 font-bold py-2 px-4 rounded-md transition duration-300">
                  2023
                </button>
                <button className="bg-transparent border border-white text-white hover:bg-white hover:text-purple-700 font-bold py-2 px-4 rounded-md transition duration-300">
                  2022
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Important Information</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Terms of Service</AccordionTrigger>
                    <AccordionContent>
                      <p>Our terms of service outline the rules and guidelines for using our rental platform. By using our service, you agree to these terms.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Privacy Policy</AccordionTrigger>
                    <AccordionContent>
                      <p>Our privacy policy explains how we collect, use, and protect your personal information when you use our rental services.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Refund Policy</AccordionTrigger>
                    <AccordionContent>
                      <p>Learn about our refund conditions, timeframes, and the process to request a refund for rental services.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Insurance Coverage</AccordionTrigger>
                    <AccordionContent>
                      <p>Details about our optional insurance plans that protect both renters and owners in case of damage or loss.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Dispute Resolution</AccordionTrigger>
                    <AccordionContent>
                      <p>Our process for handling disputes between renters and the platform, ensuring fair resolution for all parties involved.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Helpful Documents</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                      <FileText className="h-5 w-5 mr-2" />
                      Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                      <FileText className="h-5 w-5 mr-2" />
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                      <FileText className="h-5 w-5 mr-2" />
                      Insurance Coverage
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                      <FileText className="h-5 w-5 mr-2" />
                      Rental Agreement
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                      <FileText className="h-5 w-5 mr-2" />
                      Annual Report 2023
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Subscribe to our newsletter</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-rentev-orange"
                />
                <button className="bg-rentev-orange text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition duration-300">
                  SUBSCRIBE
                </button>
              </div>
              <div className="mt-4 flex justify-between">
                <img src="/placeholder.svg" alt="Google" className="h-6" />
                <img src="/placeholder.svg" alt="Amazon" className="h-6" />
                <img src="/placeholder.svg" alt="Walmart" className="h-6" />
                <img src="/placeholder.svg" alt="Samsung" className="h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Information;
