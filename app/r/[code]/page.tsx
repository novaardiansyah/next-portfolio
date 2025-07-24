'use client';

import React, { useEffect, useState } from 'react';

type Props = {
  params: Promise<{ 
    code: string 
  }>
};

export default function Page({ params }: Props) {
  const { code } = React.use(params);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    fetch(`/api/short-urls?code=${code}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        setSeconds(res.data?.seconds || 3)
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [code]);

  useEffect(() => {
    if (loading || !data?.short_url?.long_url) return;

    if (seconds <= 0) {
      window.location.href = data.short_url.long_url;
      return;
    }

    const timer = setTimeout(() => setSeconds(s => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds, loading, data]);

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="w-100" style={{ maxWidth: 400 }}>
        <div className="card shadow-lg rounded-4 p-4 text-center animate-fade-in">
          {/* Spinner */}
          <div className="mb-4">
            <div className="spinner-border text-success" style={{ width: '3rem', height: '3rem' }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          <h2 className="h4 fw-bold text-success mb-2">Redirecting…</h2>
          <div className="text-secondary mb-3">
            You are being redirected to the original URL.<br className="d-none d-md-inline" />
            If you are not redirected automatically, please click the button below.
          </div>
          {
            !loading && (
              <>
                <div className="d-flex align-items-center justify-content-center mb-4 gap-2">
                  <span className="text-muted">Redirecting in</span>
                  <span id="countdown" className="fs-2 fw-bolder text-success">{seconds}</span>
                  <span className="text-muted">seconds…</span>
                </div>
                <a
                  href={data?.long_url || "#"}
                  className="btn btn-success btn-lg rounded-pill px-4 fw-semibold shadow-sm"
                >
                  Let&apos;s go now
                </a>
              </>
            )
          }
        </div>
      </div>
      {/* Fade-in animation */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(24px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </div>
  );
}