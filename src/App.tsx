/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import FocusAreas from './components/FocusAreas';
import YouTubeBoard from './components/YouTubeBoard';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-slate-900 selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <FocusAreas />
        <YouTubeBoard />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
