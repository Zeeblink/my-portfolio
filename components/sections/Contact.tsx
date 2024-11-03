"use client";
import { Button } from "@/components/ui/button";
import Section from "../Section";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import FloatingShape from "../animated/FloatingShapes";
import FloatingTriangle from "../animated/FloatingTriangle";

const Contact = () => (
  <Section id="contact">
    <div className="max-w-2xl mx-auto relative">
      <FloatingShape className="text-yellow-400 left-0 top-0" />
      <FloatingTriangle className="text-yellow-400 right-0 bottom-0" />
      <h3 className="text-3xl font-bold mb-8 text-center">Get In Touch</h3>
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <Input id="name" className="bg-gray-800 border-gray-700" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <Input id="email" type="email" className="bg-gray-800 border-gray-700" />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block mb-2">Subject</label>
          <Input id="subject" className="bg-gray-800 border-gray-700" />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2">Message</label>
          <Textarea id="message" className="bg-gray-800 border-gray-700" rows={6} />
        </div>
        <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
          Send Message
        </Button>
      </form>
    </div>
  </Section>
);

export default Contact;
