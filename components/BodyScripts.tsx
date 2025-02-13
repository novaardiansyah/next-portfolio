"use client";

import Script from "next/script";
export default function BodyScripts() {
  return (
    <>
      <Script src="/plugins/jquery/jquery-v3.6.0.min.js" strategy="lazyOnload" />
      <Script src="/plugins/purecounter/purecounter_vanilla.js" strategy="lazyOnload" />
      <Script src="/plugins/bootstrap/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
      <Script src="/plugins/swiper/swiper-bundle.min.js" strategy="lazyOnload" />
      <Script src="/plugins/typed.js/typed.umd.js" strategy="lazyOnload" />
      
      {/* Custom JS */}
      <Script src="/js/main/index.js?v=1.1" strategy="lazyOnload" />
    </>
  );
}
