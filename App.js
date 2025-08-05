import React from "react";
import { Card } from "@/components/ui/card";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-black p-6 font-sans">
      <header className="text-center mb-12">
        <img
          src="/Varsh1.jpg"
          alt="Varshini K"
          className="w-40 h-40 rounded-full mx-auto shadow-md object-cover"
        />
        <h1 className="text-4xl font-bold mt-4">Varshini K</h1>
        <p className="text-xl text-gray-600 mt-2">
          Passionate about Data Analytics | Software Testing | Project
          Management | Python Developer
        </p>
      </header>

      <section className="max-w-4xl mx-auto space-y-8">
        <Card className="p-4 shadow-lg rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>
            I am a fresher currently pursuing M.Tech in Software Engineering at
            Vellore Institute of Technology (graduating 2026). I recently
            completed my internship as a Quality Technician Intern at Schneider
            Electric IT Business India Pvt, Bangalore.
          </p>
        </Card>

        <Card className="p-4 shadow-lg rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc pl-5">
            <li>Python, SQL, Machine Learning</li>
            <li>Power BI, Jupyter, Google Colab, VS Code</li>
            <li>Selenium, Agile Methodology</li>
            <li>Communication, Teamwork, Adaptability</li>
          </ul>
        </Card>

        <Card className="p-4 shadow-lg rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">Services</h2>
          <ul className="list-disc pl-5">
            <li>Data Analytics</li>
            <li>Business Intelligence Intern</li>
            <li>Software Testing</li>
            <li>Project Management</li>
          </ul>
        </Card>

        <Card className="p-4 shadow-lg rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <ul className="list-disc pl-5">
            <li>
              EV Battery Health Prediction – ML-based project predicting battery
              performance.
            </li>
            <li>
              SRT Tool at Schneider Electric – Identified rejection patterns and
              created analytics dashboards.
            </li>
          </ul>
        </Card>

        <Card className="p-4 shadow-lg rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>Email: varshinikubendran2003@hgmail.com</p>
          <p>Phone: 9361882521</p>
          <div className="mt-4 space-y-1">
            <p>
              <a
                href="https://www.linkedin.com/in/varshini-k-00ba29247"
                className="text-blue-600 underline"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <a
                href="https://github.com/VarshVK"
                className="text-blue-600 underline"
              >
                GitHub
              </a>
            </p>
            <p>
              <a
                href="https://leetcode.com/u/VarshiniVK"
                className="text-blue-600 underline"
              >
                LeetCode
              </a>
            </p>
            <p>
              <a
                href="https://codeforces.com/profile/kvarshini"
                className="text-blue-600 underline"
              >
                Codeforces
              </a>
            </p>
            <p>
              <a
                href="https://drive.google.com/file/d/13b18J_RS5rjpam42d9UP65Dcsn77wGtF/view"
                className="text-blue-600 underline"
              >
                Resume
              </a>
            </p>
            <p>
              <a
                href="https://drive.google.com/drive/folders/17l1WOmvgTKXeDAjaRlCmqU_jPy3yAyXO"
                className="text-blue-600 underline"
              >
                Certifications
              </a>
            </p>
          </div>
        </Card>
      </section>
    </div>
  );
}
