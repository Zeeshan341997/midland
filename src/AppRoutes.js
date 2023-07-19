import React from 'react'
import { Route, Routes } from "react-router-dom";
import LandingPage from './screens/LandingPage';
import ContactPage from './screens/ContactPage';
import DocsPage from './screens/DocsPage';
import GalleryPage from './screens/GalleryPage';
import AboutPage from './screens/AboutPage';
import PostCodePage from './screens/PostCodePage';
import TestimonialsPage from './screens/TestimonialsPage';
import ConstructionServicesPage from './screens/ConstructionServicesPage';
import EventServicesPage from './screens/EventServicesPage';
import EmptyingServicingPage from './screens/Emptying&ServicingPage';

const AppRoutes = props => {
    return (
        <main className="Router">
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/contact-us" element={<ContactPage />} />
                <Route path="/documents-and-certificates" element={<DocsPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/construction-services" element={<ConstructionServicesPage />} />
                <Route path="/event-services" element={<EventServicesPage />} />
                <Route path="/post-code-search" element={<PostCodePage />} />
                <Route path="/emptying-servicing" element={<EmptyingServicingPage />} />
            </Routes>
        </main>
    )
}

export default AppRoutes
