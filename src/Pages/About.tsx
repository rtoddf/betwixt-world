import { useState, useEffect } from 'react';
import type { Slot } from '@/components/layouts/PageBuilder';
import PageLayout from '@/components/PageLayout';
import PageBuilder from '@/components/layouts/PageBuilder';
import '../styles/main.css';

interface PageData {
  slots: Slot[];
}

function About() {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/.netlify/functions/pages?slug=about')
      .then((res) => res.json())
      .then((data) => {
        setPageData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch page:', err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <PageLayout>
        <div>Loading...</div>
      </PageLayout>
    );
  if (!pageData)
    return (
      <PageLayout>
        <div>Page not found.</div>
      </PageLayout>
    );

  return (
    <PageLayout>
      <div className="bt-about">
        <div className="bw-eyebrow">About Betwixt</div>
        <PageBuilder slots={pageData.slots} />
      </div>
    </PageLayout>
  );
}

export default About;
