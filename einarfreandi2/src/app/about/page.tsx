"use client";
import React from "react";
import NavBar from "../components/NavBar";

export default function About() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-base-200 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
          <p className="text-lg text-center mb-12 text-base-content/80">
            Welcome to my portfolio! I’m an independent artist passionate about bringing creativity to life through unique, handcrafted art pieces.
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <div className="avatar">
                <div className="w-72 rounded-xl shadow-lg ring ring-primary ring-offset-base-100 ring-offset-4">
                  <img
                    src="/my-portrait.jpg"
                    alt="Artist portrait"
                  />
                </div>
              </div>
            </div>

            {/* Story */}
            <div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-2xl">My Story</h2>
                  <p>
                    I’ve been creating art for over a decade, exploring different mediums such as acrylic, watercolor, and digital painting. 
                    Each piece I create is inspired by the world around me — from nature’s colors to the emotions we experience every day.
                  </p>
                  <p>
                    Through this website, I want to share my work with you and make it easy for you to own a unique piece of art that speaks to you. 
                    Whether it’s a bold statement piece or something subtle for your space, my goal is to create something that feels truly yours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center">
            <a href="/" className="btn btn-primary btn-lg">
              View My Art
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
