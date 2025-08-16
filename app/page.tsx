'use client'
import React, { useState } from "react";
import Image from "next/image";
// import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

// NOTE:
// The original crash was caused by importing a Textarea component from
// "@/components/ui/textarea" which in some setups may not exist or may
// export differently. To make this file robust we provide a lightweight
// local Textarea component as a thin wrapper around the native <textarea>.

// const Textarea = React.forwardRef(({ className = "", rows = 4, ...props }, ref) => (
//   <textarea
//     ref={ref}
//     rows={rows}
//     {...props}
//     className={
//       "w-full rounded-lg border border-slate-200 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 " +
//       className
//     }
//   />
// ));

// Sample data
const classes = Array.from({ length: 10 }, (_, i) => ({
  title: `Class ${i + 1}`,
  short: `Holistic curriculum for Class ${i + 1} with experienced teachers and residential support.`,
}));

const facilities = [
  { title: "Residential Hostel", desc: "Safe, supervised dorms with round-the-clock care." },
  { title: "Computer Lab", desc: "Modern systems, high-speed internet, and practical labs." },
  { title: "Library", desc: "Rich collection of textbooks, reference books & reading zones." },
  { title: "Sports Complex", desc: "Playgrounds and indoor courts for holistic physical growth." },
];

export default function App() {
  const [form, setForm] = useState({ parent: "", phone: "", child: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setForm((s) => ({ ...s, [name]: value }));
  // }

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   setSubmitting(true);
  //   // For now we just simulate a submit — replace with real API call as needed
  //   console.log("Enquiry submitted:", form);
  //   try {
  //     // simulate delay
  //     await new Promise((r) => setTimeout(r, 700));
  //     alert("Enquiry submitted. We'll contact you soon.");
  //     setForm({ parent: "", phone: "", child: "", message: "" });
  //   } finally {
  //     setSubmitting(false);
  //   }
  // }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <header className="max-w-7xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-white font-bold text-xl shadow-lg">SS</div>
          <div>
            <h1 className="text-2xl font-extrabold leading-tight">Dr. Bhimrao Ambedkar Residential School</h1>
            <p className="text-sm text-slate-600">Under SC & ST Welfare Department, Patna, Bihar</p>
          </div>
        </div>
        <nav className="flex items-center gap-3">
          <Button>Admissions</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost" asChild>
            <Link href={"/dashboard"}>Login</Link>
          </Button>
        </nav>
      </header>

      <section className="bg-[url('/school-hero.jpg')] bg-cover bg-center py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg leading-tight">A nurturing home, a brilliant future</h2>
            <p className="mt-4 text-white/90 max-w-xl">We provide safe residential living, personalised learning and a platform for every child to thrive — academically, physically, and emotionally.</p>
            <div className="mt-6 flex gap-3">
              <Button className="shadow-2xl">Request Prospectus</Button>
              <Button variant="outline">Book a Visit</Button>
            </div>
          </motion.div>

          <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
            <Card className="rounded-2xl p-4 bg-white/90 shadow-xl">
              <CardHeader>
                <CardTitle>Quick Contact</CardTitle>
                <CardDescription>Call or write — we're here to help 24/7</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <Phone size={20} />
                  <div>
                    <div className="text-sm font-medium">Phone</div>
                    <div className="text-sm text-slate-600">+91 98765 43210</div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <Mail size={20} />
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <div className="text-sm text-slate-600">admissions@school.edu</div>
                  </div>
                </div>

                <div className="mt-4">
                  <Button className="w-full">Enquire Now</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div> */}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold">Our Approach</h3>
            <p className="mt-3 text-slate-700">We follow an integrated approach combining academic excellence, life-skills education, sports and arts. Residential life is structured to ensure safety, timely care and opportunities for leadership and responsibility.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {facilities.map((f) => (
                <Card key={f.title} className="rounded-2xl">
                  <CardContent>
                    <h4 className="font-semibold text-lg">{f.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <aside>
            <Card className="rounded-2xl sticky top-6">
              <CardHeader>
                <CardTitle>Campus Tour</CardTitle>
                <CardDescription>Explore our residential campus</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src="/campus.jpg" alt="campus" width={400} height={240} className="rounded-lg" />
                <div className="mt-4">
                  <Button className="w-full">View Gallery</Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      <section className="bg-white/60 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold">Classes & Curriculum (1 - 10)</h3>
          <p className="mt-2 text-slate-600">Developmentally-appropriate curriculum with remedial and enrichment support. Each class gets a dedicated caretaker in the hostel.</p>

          {/* <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {classes.map((c) => (
              <motion.div key={c.title} whileHover={{ y: -6 }} className="p-4 rounded-2xl bg-gradient-to-b from-white to-slate-50 shadow">
                <h4 className="text-lg font-semibold">{c.title}</h4>
                <p className="text-sm text-slate-600 mt-2">{c.short}</p>
                <div className="mt-4 flex gap-2">
                  <Button size="sm">View Syllabus</Button>
                  <Button variant="ghost" size="sm">Meet Teachers</Button>
                </div>
              </motion.div>
            ))}
          </div> */}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold">Residential Life</h3>
        <p className="mt-2 text-slate-600">Our residential program emphasises safety, routine, balanced nutrition, and mentorship. House parents and medical staff are available 24x7.</p>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl">
            <CardContent>
              <h4 className="font-semibold">Boarding Houses</h4>
              <p className="text-sm text-slate-600 mt-2">Separated by age and gender, supervised by trained house parents.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent>
              <h4 className="font-semibold">Health & Safety</h4>
              <p className="text-sm text-slate-600 mt-2">On-campus nurse and tie-ups with nearby hospitals for emergencies.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent>
              <h4 className="font-semibold">Daily Routine</h4>
              <p className="text-sm text-slate-600 mt-2">Structured study hours, supervised recreational time and evening prep sessions.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-3xl font-bold">Admissions & Fees</h3>
            <p className="mt-2 text-slate-600">Admissions open year-round depending on availability. Scholarships and instalment options available for meritorious and needy students.</p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Prospectus: Online & Offline</li>
              <li>• Documents: Birth cert, previous report card, guardians' ID</li>
              <li>• Hostel deposit and refundable caution money</li>
            </ul>
          </div>

          <Card className="rounded-2xl">
            <CardContent>
              <h4 className="font-semibold">Enquiry Form</h4>
              <form className="mt-4 grid gap-3" >
                <label className="sr-only" htmlFor="parent">Parent / Guardian Name</label>
                <Input id="parent" name="parent" value={form.parent}  placeholder="Parent / Guardian Name" />

                <label className="sr-only" htmlFor="phone">Phone Number</label>
                <Input id="phone" name="phone" value={form.phone}  placeholder="Phone Number" />

                <label className="sr-only" htmlFor="child">Child's Name & Class</label>
                <Input id="child" name="child" value={form.child}  placeholder="Child's Name & Class" />

                <label className="sr-only" htmlFor="message">Message or requirement</label>
                {/* <Textarea id="message" name="message" value={form.message}  placeholder="Message or requirement" rows={4} /> */}

                <Button type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Submit Enquiry"}</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 items-start">
          <div>
            <h4 className="font-bold text-lg">Shri Senior Secondary Residential School</h4>
            <p className="text-sm text-slate-600 mt-2">Address Line 1, Town, District, State — PIN</p>
            <div className="mt-3 flex items-center gap-3 text-sm text-slate-600">
              <MapPin size={16} /> <span>Visit our campus</span>
            </div>
          </div>

          <div>
            <h5 className="font-semibold">Quick Links</h5>
            <ul className="mt-2 text-sm text-slate-600 space-y-1">
              <li>Admissions</li>
              <li>Hostel Rules</li>
              <li>Academic Calendar</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold">Contact</h5>
            <p className="text-sm text-slate-600">+91 98765 43210</p>
            <p className="text-sm text-slate-600">admissions@school.edu</p>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-slate-500">© {new Date().getFullYear()} Shri Senior Secondary Residential School — All rights reserved.</div>
      </footer>
    </main>
  );
}
