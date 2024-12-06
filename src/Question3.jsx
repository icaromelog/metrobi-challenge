import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { ExtraContent } from './components/ExtraContent';
import { RelatedImages } from './components/RelatedImages';
import { RelatedPosts } from './components/RelatedPosts';
import { Footer } from './components/Footer';

import './components/Layout.css';

export function Layout() {
    return (
        <>
          <Header />
            
            <div className="container-flex">
                <div className="content-sidebar">
                    <Hero />
                    <Sidebar />
                </div>
                <main className="content-container">
                    <MainContent />
                    <ExtraContent />
                </main>
                <RelatedImages />
                <RelatedPosts />
            </div>
          <Footer />
        </>
      );
};
