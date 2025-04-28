"use client";

import { LineChart, Line, CartesianGrid, ResponsiveContainer } from "recharts";
import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import { Chart, ArcElement, Tooltip } from "chart.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Doughnut } from "react-chartjs-2";
import "leaflet/dist/leaflet.css";
import "../app/bootstrap.rtl.css";
import { useState } from "react";
import Image from "next/image";
import "../app/globals.css";
import "../app/page.css";

const date = [
  { value1: 65, value2: 90 },
  { value1: 80, value2: 110 },
  { value1: 80, value2: 110 },
  { value1: 60, value2: 95 },
  { value1: 60, value2: 95 },
  { value1: 45, value2: 85 },
  { value1: 45, value2: 85 },
  { value1: 80, value2: 95 },
  { value1: 70, value2: 95 },
  { value1: 70, value2: 115 },
  { value1: 90, value2: 115 },
  { value1: 90, value2: 100 },
  { value1: 80, value2: 100 },
  { value1: 80, value2: 115 },
  { value1: 80, value2: 115 },
  { value1: 60, value2: 95 },
  { value1: 60, value2: 95 },
  { value1: 50, value2: 85 },
  { value1: 40, value2: 85 },
];

Chart.register(ArcElement, Tooltip);

const data = {
  labels: ["موبایل", "تبلت", "دسکتاپ", "سایررموارد"],
  datasets: [
    {
      data: [50, 40, 10, 10],
      backgroundColor: ["#1b84ff", "#43ced7", "#725af2", "#f5f7f8"],
      hoverBackgroundColor: ["#1660bc", "#2e979e", "#5340b2", "#d5d6d7"],
      borderWidth: 0,
      cutout: "85%",
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

export default function Layout() {
  const [show, setShow] = useState(false);

  const [selectedLang, setSelectedLang] = useState({
    name: "انگلیسی",
    flag: "/en.svg",
  });

  const languages = [
    { name: "انگلیسی", flag: "/en.svg" },
    { name: "چینی", flag: "/cn.svg" },
    { name: "فرانسوی", flag: "/fr.svg" },
    { name: "عربی", flag: "/sa.svg" },
  ];

  return (
    <html>
      <head>
        <title>Dashboard Management 2</title>
        <meta charSet="UTF-8" />
        <link rel="icon" href="https://bootstrapdemos.wrappixel.com/ample/dist/assets/images/logos/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css" />
        <link rel="stylesheet" href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" />
      </head>
      <body>
        <header className="container header">
          <div className="container header-inner">
            <div className="d-flex">
              <button className="button-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <svg className="svg-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd" d="M3.25 7A.75.75 0 0 1 4 6.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 7m0 5a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"></path>
                </svg>
              </button>

              <div className="offcanvas offcanvas-start border-none" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasExampleLabel">منو داشبورد</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>

                <div className="offcanvas-body">
                  <ul className="nav flex-column">
                    <li>
                      <a href="#" className="nav-link nav-text">شخصی</a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" d="M20 18.415a3 3 0 0 0 .828-.587C22 16.657 22 14.771 22 11s0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172S2 7.229 2 11s0 5.657 1.172 6.828c.242.243.514.435.828.587"></path>
                            <path d="M9.95 16.05c.93-.93 1.396-1.396 1.97-1.427q.08-.003.159 0c.574.03 1.04.496 1.971 1.427c2.026 2.026 3.039 3.039 2.755 3.913a1.5 1.5 0 0 1-.09.218C16.297 21 14.865 21 12 21s-4.298 0-4.715-.819a1.5 1.5 0 0 1-.09-.218c-.284-.874.729-1.887 2.755-3.913Z"></path>
                          </g>
                        </svg>
                        عمومی
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M20.942 3.058c2.47 2.469.468 8.474-4.47 13.413c-4.94 4.939-10.945 6.94-13.414 4.471c-2.47-2.47-.468-8.474 4.471-13.413S18.473.589 20.942 3.058Zm-17.884 0c-2.47 2.47-.468 8.475 4.47 13.413c4.94 4.939 10.945 6.94 13.414 4.471c2.47-2.469.468-8.474-4.471-13.413S5.527.589 3.058 3.058Z"></path>
                            <path d="M14.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></path>
                          </g>
                        </svg>
                        کلاسیک
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                            <path d="m15.578 3.382l2 1.05c2.151 1.129 3.227 1.693 3.825 2.708C22 8.154 22 9.417 22 11.942v.117c0 2.524 0 3.787-.597 4.801c-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C13.822 21.539 12.944 22 12 22s-1.822-.46-3.578-1.382l-2-1.05c-2.151-1.129-3.227-1.693-3.825-2.708C2 15.846 2 14.583 2 12.06v-.117c0-2.525 0-3.788.597-4.802c.598-1.015 1.674-1.58 3.825-2.708l2-1.05C10.178 2.461 11.056 2 12 2s1.822.46 3.578 1.382ZM21 7.5L12 12m0 0L3 7.5m9 4.5v9.5"></path>
                          </g>
                        </svg>
                        تحلیلی
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" d="M22 22H2"></path>
                            <path d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16m14 0V11.5c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 8 18.904 8 17.5 8M3 22V11.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 8 5.096 8 6.5 8"></path>
                            <path strokeLinecap="round" d="M12 22v-3M10 5h4m-4 3h4m-4 3h4m-4 3h4"></path>
                          </g>
                        </svg>
                        کارزار
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M3.34 17c2.76 4.783 8.876 6.42 13.66 3.66a9.96 9.96 0 0 0 4.196-4.731a9.99 9.99 0 0 0-.536-8.93a9.99 9.99 0 0 0-7.465-4.928A9.96 9.96 0 0 0 7 3.339C2.217 6.101.578 12.217 3.34 17Z"></path>
                            <path strokeLinecap="round" d="M16.95 20.573S16.01 13.982 14 10.5S7.05 3.427 7.05 3.427"></path>
                            <path strokeLinecap="round" d="M21.864 12.58c-5.411-1.187-12.805 3.768-14.287 8.238m8.837-17.609c-1.488 4.42-8.74 9.303-14.125 8.243"></path>
                          </g>
                        </svg>
                        پیشرفته
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" d="m2 3l.265.088c1.32.44 1.98.66 2.357 1.184S5 5.492 5 6.883V9.5c0 2.828 0 4.243.879 5.121c.878.879 2.293.879 5.121.879h8"></path>
                            <path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3ZM5 6h11.45c2.055 0 3.083 0 3.528.674c.444.675.04 1.619-.77 3.508l-.429 1c-.378.882-.567 1.322-.942 1.57c-.376.248-.856.248-1.815.248H5"></path>
                          </g>
                        </svg>
                        کسب و کار انلاین
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#22">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z"></path>
                            <path strokeLinecap="round" d="M15 18H9"></path>
                          </g>
                        </svg>
                        صفحات اصلی
                      </a>

                      <div className="collapse" id="22">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">صفحه خانه</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">درباره ما</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">بلاگ</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">مشخصات بلاگ</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">ارتباط با ما</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">نمونه کار ها</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">تعرفه‌ ها</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#" className="nav-link nav-text">اپلیکیشن ها</a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path stroke="currentColor" strokeWidth="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></path>
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 4V2.5M17 4V2.5M2.5 9h19"></path>
                            <path fill="currentColor" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></path>
                          </g>
                        </svg>
                        تقویم
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="m20.312 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591c-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73q.15-.019.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115Z"></path>
                            <path d="M16.415 17.974a4 4 0 0 1-1.068 1.678c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592q.638-.172 1.165-.309"></path>
                            <path strokeLinecap="round" d="m11.777 10l4.83 1.294M11 12.898l2.898.776"></path>
                          </g>
                        </svg>
                        کانبان
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zm-8.532-5.475l.693-.287zm5.409 3.078l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zm-18.5 1v-1h-1.5v1zm-1.5 0c0 1.155 0 2.058.05 2.787c.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441c-.046-.666-.046-1.51-.046-2.685zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></path>
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M8 9h8m-8 3.5h5.5"></path>
                          </g>
                        </svg>
                        چت
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" d="M22 10c.018.727 0 1.054 0 2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h3"></path>
                            <path strokeLinecap="round" d="m6 8l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296"></path>
                            <circle cx="19" cy="5" r="3"></circle>
                          </g>
                        </svg>
                        ایمیل
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M2 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2s2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6v12c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 22 7.4 22 6 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 20.1 2 19.4 2 18z"></path>
                            <path strokeLinecap="round" d="M7 19H5"></path>
                            <path d="m13.314 4.929l-2.142 2.142c-.578.578-.867.867-1.02 1.235C10 8.673 10 9.082 10 9.9v9.656l8.97-8.97c.99-.99 1.486-1.485 1.671-2.056a2.5 2.5 0 0 0 0-1.545c-.185-.57-.68-1.066-1.67-2.056s-1.486-1.485-2.056-1.67a2.5 2.5 0 0 0-1.545 0c-.571.185-1.066.68-2.056 1.67Z"></path>
                            <path d="M6 22h12c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 20.1 22 19.4 22 18s0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092C20.1 14 19.4 14 18 14h-2.5"></path>
                          </g>
                        </svg>
                        یادداشت‌ ها
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M19 22v-1.5M5 22v-1.5"></path>
                            <path fill="currentColor" d="M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></path>
                            <path stroke="currentColor" strokeWidth="1.5" d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12z"></path>
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M2 14h20M2 8h20"></path>
                          </g>
                        </svg>
                        فهرست مخاطبین
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                            <path strokeLinejoin="round" d="m14 16l2.1 2.5l3.9-5"></path>
                            <path d="M21 6H3m18 4H3m7 4H3m7 4H3"></path>
                          </g>
                        </svg>
                        لیست مخاطبین
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M16.755 2h-9.51c-1.159 0-1.738 0-2.206.163a3.05 3.05 0 0 0-1.881 1.936C3 4.581 3 5.177 3 6.37v14.004c0 .858.985 1.314 1.608.744a.946.946 0 0 1 1.284 0l.483.442a1.657 1.657 0 0 0 2.25 0a1.657 1.657 0 0 1 2.25 0a1.657 1.657 0 0 0 2.25 0a1.657 1.657 0 0 1 2.25 0a1.657 1.657 0 0 0 2.25 0l.483-.442a.946.946 0 0 1 1.284 0c.623.57 1.608.114 1.608-.744V6.37c0-1.193 0-1.79-.158-2.27a3.05 3.05 0 0 0-1.881-1.937C18.493 2 17.914 2 16.755 2Z"></path>
                            <path strokeLinecap="round" d="M10.5 11H17M7 11h.5M7 7.5h.5m-.5 7h.5m3-7H17m-6.5 7H17"></path>
                          </g>
                        </svg>
                        صورت حساب
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="9" r="3"></circle>
                            <circle cx="12" cy="12" r="10"></circle>
                            <path strokeLinecap="round" d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5"></path>
                          </g>
                        </svg>
                        حساب کاربری
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#1">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M2.5 6.5c0-1.886 0-2.828.586-3.414S4.614 2.5 6.5 2.5s2.828 0 3.414.586s.586 1.528.586 3.414v11c0 1.886 0 2.828-.586 3.414S8.386 21.5 6.5 21.5s-2.828 0-3.414-.586S2.5 19.386 2.5 17.5zm11 9c0-1.886 0-2.828.586-3.414s1.528-.586 3.414-.586s2.828 0 3.414.586s.586 1.528.586 3.414v2c0 1.886 0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586s-.586-1.528-.586-3.414zm0-10c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083c.367-.152.833-.152 1.765-.152h2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152h-2c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C13.5 6.898 13.5 6.432 13.5 5.5Z"></path>
                        </svg>
                        وبلاگ
                      </a>

                      <div className="collapse" id="1">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">پست‌ ها</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">جزئیات</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#2">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M3.864 16.455c-.858-3.432-1.287-5.147-.386-6.301S6.148 9 9.685 9h4.63c3.538 0 5.306 0 6.207 1.154s.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91Z"></path>
                            <path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4"></path>
                            <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 18L12 9m7.5 9l-7-8.5m-8 .5L12 21l7.5-11"></path>
                          </g>
                        </svg>
                        کسب و کار اینترنتی
                      </a>

                      <div className="collapse" id="2">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a hrefLang="#" className="nav-link">فروشگاه</a>
                          </li>

                          <li className="nav-item">
                            <a hrefLang="#" className="nav-link">جزئیات</a>
                          </li>

                          <li className="nav-item">
                            <a hrefLang="#" className="nav-link">فهرست</a>
                          </li>

                          <li className="nav-item">
                            <a hrefLang="#" className="nav-link">تسویه‌ حساب</a>
                          </li>

                          <li className="nav-item">
                            <a hrefLang="#" className="nav-link">افزودن محصول</a>
                          </li>

                          <li className="nav-item">
                            <a hrefLang="#" className="nav-link">ویرایش محصول</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#" className="nav-link nav-text">بخش‌ های وب سایت</a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path strokeLinecap="round" d="M12 17v1m0-12v1m3 2.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5"></path>
                          </g>
                        </svg>
                        قیمت‌ گذاری
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M10.125 8.875a1.875 1.875 0 1 1 2.828 1.615c-.475.281-.953.708-.953 1.26V13"></path>
                            <circle cx="12" cy="17" r="1" fill="currentColor"></circle>
                          </g>
                        </svg>
                        سوالات متداول
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="9" r="3"></circle>
                            <circle cx="12" cy="12" r="10"></circle>
                            <path strokeLinecap="round" d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5"></path>
                          </g>
                        </svg>
                        تنظیمات اکانت
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z"></path>
                            <path d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12s.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16s2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12s-.993-.89-2.979-1.685L18.234 10"></path>
                            <path d="m5.766 14l-.787.315C2.993 15.109 2 15.507 2 16s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20s2.227-.397 4.213-1.192l2.808-1.123C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14"></path>
                          </g>
                        </svg>
                        صفحه لندینگ
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#3">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M2.5 6.5c0-1.886 0-2.828.586-3.414S4.614 2.5 6.5 2.5s2.828 0 3.414.586s.586 1.528.586 3.414v11c0 1.886 0 2.828-.586 3.414S8.386 21.5 6.5 21.5s-2.828 0-3.414-.586S2.5 19.386 2.5 17.5zm11 9c0-1.886 0-2.828.586-3.414s1.528-.586 3.414-.586s2.828 0 3.414.586s.586 1.528.586 3.414v2c0 1.886 0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586s-.586-1.528-.586-3.414zm0-10c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083c.367-.152.833-.152 1.765-.152h2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152h-2c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C13.5 6.898 13.5 6.432 13.5 5.5Z"></path>
                        </svg>
                        ویجت‌ ها
                      </a>

                      <div className="collapse" id="3">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">کارت‌ های بازی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">چارت‌ ها</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">سربرگ</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">ویجت‌ های نمایش محتوا</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">ویجت‌ های برنامه</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">ویجت‌ های داده</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#" className="nav-link nav-text">رابط کاربری</a>
                    </li>

                    <li>
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#5">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M2.5 6.5c0-1.886 0-2.828.586-3.414S4.614 2.5 6.5 2.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S2.5 8.386 2.5 6.5Zm11 11c0-1.886 0-2.828.586-3.414s1.528-.586 3.414-.586s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586s-.586-1.528-.586-3.414Zm-11 0c0-1.886 0-2.828.586-3.414S4.614 13.5 6.5 13.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S2.5 19.386 2.5 17.5Zm11-11c0-1.886 0-2.828.586-3.414S15.614 2.5 17.5 2.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S13.5 8.386 13.5 6.5Z"></path>
                        </svg>
                        عناصر رابط کاربری
                      </a>

                      <div className="collapse" id="5">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">منوی جمع‌ شونده</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">برچسب</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">دکمه‌ ها</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">منو های کشویی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">پنجره‌ های پاپ‌ اپ</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">زبانه</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">توضیح راهنما و پنجره شناور</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">اخطار ها</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">نوار پیشرفت</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">صفحه‌ بندی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">تایپو گرافی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">رابط کاربری بوت‌استرپ</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">مسیر راهنما</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">منوی کناری مخفی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">لیست ‌ها</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">جدول‌ بندی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">اسلایدر</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">نظارت بر اسکرول</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">نشانگر بارگذاری</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">لینک</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#6">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></path>
                            <path d="M17 11v-1c0-1.886 0-2.828-.586-3.414S14.886 6 13 6h-2c-1.886 0-2.828 0-3.414.586S7 8.114 7 10v1"></path>
                            <path strokeLinecap="round" d="M5 11h14M8 16h8"></path>
                          </g>
                        </svg>
                        کارت ها
                      </a>

                      <div className="collapse" id="6">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">کارت‌ های ساده</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">کارت‌ های سفارشی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">کارت‌ های اب ‌و هوا</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">کارت‌ های قابل‌ کشیدن</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#7">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M8 8h8v8H8zm8 8.001h3a3 3 0 1 1-3 3zm-7.999 0h-3a3 3 0 1 0 3 3zM16 8h3a3 3 0 1 0-3-3zM8.001 8h-3a3 3 0 1 1 3-3z"></path>
                        </svg>
                        بخش تشکیل‌ دهنده
                      </a>

                      <div className="collapse" id="7">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a hrefLang="#" className="nav-link">اعلان جذاب</a>
                          </li>

                          <li className="nav-item">
                            <a hrefLang="#" className="nav-link">ساختار تو‌ در‌ تو</a>
                          </li>

                          <li className="nav-item">
                            <a hrefLang="#" className="nav-link">اسلایدر مینیمال</a>
                          </li>

                          <li className="nav-item">
                            <a hrefLang="#" className="nav-link">ارزیابی</a>
                          </li>

                          <li className="nav-item">
                            <a hrefLang="#" className="nav-link">پیام هشدار فوری</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#" className="nav-link nav-text">فرم های ثبت داده</a>
                    </li>

                    <li>
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#8">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5"></path>
                            <circle cx="19" cy="5" r="3"></circle>
                            <path strokeLinecap="round" d="M7 14h9m-9 3.5h6"></path>
                          </g>
                        </svg>
                        اجزای فرم
                      </a>

                      <div className="collapse" id="8">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">ورودی فرم ها</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">دسته‌ بندی ورودی‌ ها</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">شبکه‌ بندی ورودی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">چک‌ باکس و دکمه‌ های رادیویی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">سوئیچ بوت‌استرپ</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">انتخابگر پیشرفته</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#9">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22m-4 0c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14m8-12C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10m12-8c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10M4 11.5s2.4-2 8-2s8 2 8 2"></path>
                            <path fill="currentColor" d="M5.25 10a.75.75 0 0 0 1.5 0zm12.164-3.914l-.53.53zM10 6.25h4v-1.5h-4zM6.75 10v-.5h-1.5v.5zm10.5-.5v.5h1.5v-.5zM14 6.25c.964 0 1.612.002 2.095.067c.461.062.659.169.789.3l1.06-1.062c-.455-.455-1.022-.64-1.65-.725c-.606-.082-1.372-.08-2.294-.08zm4.75 3.25c0-.922.002-1.688-.08-2.294c-.084-.628-.27-1.195-.726-1.65l-1.06 1.06c.13.13.237.328.3.79c.064.482.066 1.13.066 2.094zM10 4.75c-.922 0-1.688-.002-2.294.08c-.628.084-1.195.27-1.65.725l1.06 1.061c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066zM6.75 9.5c0-.964.002-1.612.067-2.095c.062-.461.169-.659.3-.789l-1.062-1.06c-.455.455-.64 1.022-.725 1.65c-.082.606-.08 1.372-.08 2.294z"></path>
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 14v.5c0 1.886 0 2.828.586 3.414S8.114 18.5 10 18.5h4c1.886 0 2.828 0 3.414-.586S18 16.386 18 14.5V14"></path>
                          </g>
                        </svg>
                        ابزار های جانبی فرم
                      </a>

                      <div className="collapse" id="9">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">اپلود فایل</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">قالب‌ بندی ورودی فرم</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">تکمیل خودکار فرم</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#10">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path stroke="currentColor" strokeWidth="1.5" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z"></path>
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 8v4"></path>
                            <circle cx="12" cy="15" r="1" fill="currentColor"></circle>
                          </g>
                        </svg>
                        اعتبار سنجی فرم
                      </a>

                      <div className="collapse" id="10">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">اعتبار سنجی بوت‌ استرپ</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">اعتبار سنجی سفارشی</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#11">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M3 13.193C3 18.057 6.855 22 11.612 22h.777C17.145 22 21 18.057 21 13.193v-.265c0-4.611-2.729-8.765-6.903-10.507a5.43 5.43 0 0 0-4.194 0C5.73 4.163 3 8.317 3 12.928z"></path>
                            <path strokeLinecap="round" d="M7.615 10.724c.634-2.006 2.016-3.636 3.77-4.448"></path>
                          </g>
                        </svg>
                        انتخاب‌ کننده فرم
                      </a>

                      <div className="collapse" id="11">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">انتخابگر رنگ</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">انتخابگر محدوده بوت‌ استرپ</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">انتخابگر تاریخ بوت‌ استرپ</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">انتخابگر تاریخ متریال</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#12">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" d="M21.998 10.5c-.016-3.732-.162-5.735-1.463-7.036C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535c1.241 1.241 3.123 1.43 6.536 1.46M21.5 8h-19m8-5.5L7 8m10-5.5L13.5 8"></path>
                            <path d="m18.562 13.935l.417-.417a1.77 1.77 0 1 1 2.503 2.503l-.417.417m-2.503-2.503s.052.887.834 1.669s1.669.834 1.669.834m-2.503-2.503l-3.835 3.835c-.26.26-.39.39-.5.533a3 3 0 0 0-.338.545c-.078.164-.136.338-.252.686l-.372 1.116l-.12.36m7.92-4.572l-3.835 3.835c-.26.26-.39.39-.533.5a3 3 0 0 1-.545.338c-.164.078-.338.136-.686.252l-1.116.372l-.36.12m0 0l-.362.12a.477.477 0 0 1-.604-.603l.12-.361m.845.844l-.844-.844"></path>
                          </g>
                        </svg>
                        ویرایش کننده فرم
                      </a>

                      <div className="collapse" id="12">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">ویرایشگر متن پیشرفته</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">ادیتور متنی</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></path>
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 14.5h8M6 18h5.5"></path>
                            <path stroke="currentColor" strokeWidth="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></path>
                          </g>
                        </svg>
                        فرم استاندارد
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></path>
                            <path stroke="currentColor" strokeWidth="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4M8.146 13.023C8.526 12.34 8.716 12 9 12s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.319-1.037.477-1.266.303s-.192-.567-.116-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></path>
                          </g>
                        </svg>
                        فرم عمودی
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></path>
                            <path stroke="currentColor" strokeWidth="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></path>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 16.5L7.333 18L10 15"></path>
                          </g>
                        </svg>
                        فرم افقی
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></path>
                            <path stroke="currentColor" strokeWidth="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></path>
                            <ellipse fill="currentColor" cx="17" cy="14.5" rx="1" ry="1.5"></ellipse>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17.5a5.41 5.41 0 0 0 6 0"></path>
                            <ellipse fill="currentColor" cx="7" cy="14.5" rx="1" ry="1.5"></ellipse>
                          </g>
                        </svg>
                        اقدامات فرم
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></path>
                            <path stroke="currentColor" strokeWidth="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></path>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 16h5m0 0l-1.875-2M11 16l-1.875 2"></path>
                          </g>
                        </svg>
                        جدا کننده ردیف
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path fill="currentColor" d="m15.393 4.054l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14z"></path>
                            <path stroke="currentColor" strokeWidth="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></path>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 16H6m0 0l1.875-2M6 16l1.875 2"></path>
                          </g>
                        </svg>
                        فرم دارای حاشیه
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 15.8L7.143 17L10 14M6 8.8L7.143 10L10 7"></path>
                            <path strokeLinecap="round" d="M13 9h5m-5 7h5"></path>
                          </g>
                        </svg>
                        جزئیات تکمیلی فرم
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12"></path>
                            <path d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14Z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.5 14.4l1.429 1.6l3.571-4"></path>
                          </g>
                        </svg>
                        سطر های متناوب رنگی
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="m18.18 8.04l.463-.464a1.966 1.966 0 1 1 2.781 2.78l-.463.464M18.18 8.04s.058.984.927 1.853s1.854.927 1.854.927M18.18 8.04l-4.26 4.26c-.29.288-.434.433-.558.592q-.22.282-.374.606c-.087.182-.151.375-.28.762l-.413 1.24l-.134.401m8.8-5.081l-4.26 4.26c-.29.29-.434.434-.593.558q-.282.22-.606.374c-.182.087-.375.151-.762.28l-1.24.413l-.401.134m0 0l-.401.134a.53.53 0 0 1-.67-.67l.133-.402m.938.938l-.938-.938"></path>
                            <path strokeLinecap="round" d="M8 13h2.5M8 9h6.5M8 17h1.5M19.828 3.172C18.657 2 16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172S3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172c.944-.943 1.127-2.348 1.163-4.828"></path>
                          </g>
                        </svg>
                        ورودی شناور فرم
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 7v7m0 0l2.5-3m-2.5 3L6 11m9.5-4v7m0 0l2.5-3m-2.5 3L13 11"></path>
                            <path strokeLinecap="round" d="M18 17H6"></path>
                            <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></path>
                          </g>
                        </svg>
                        فرم چند مرحله ای
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M9.5 19.75a.75.75 0 0 0 0-1.5zM11 5v.75a.75.75 0 0 0 .53-1.28zM9.53 2.47a.75.75 0 0 0-1.06 1.06zM9.5 18.25H9v1.5h.5zM9 5.75h2v-1.5H9zm2.53-1.28l-2-2l-1.06 1.06l2 2zM1.25 12A7.75 7.75 0 0 0 9 19.75v-1.5A6.25 6.25 0 0 1 2.75 12zm1.5 0A6.25 6.25 0 0 1 9 5.75v-1.5A7.75 7.75 0 0 0 1.25 12zM13 19v-.75a.75.75 0 0 0-.53 1.28zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm.03-17.28a.75.75 0 0 0 0 1.5zm.5 14h-2v1.5h2zm-2.53 1.28l2 2l1.06-1.06l-2-2zM14.5 5.75h.5v-1.5h-.5zM21.25 12A6.25 6.25 0 0 1 15 18.25v1.5A7.75 7.75 0 0 0 22.75 12zm1.5 0A7.75 7.75 0 0 0 15 4.25v1.5A6.25 6.25 0 0 1 21.25 12z"></path>
                        </svg>
                        فرم تکرار شونده
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link nav-text">لیست جدول بندی شده</a>
                    </li>

                    <li>
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#13">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path stroke="currentColor" strokeWidth="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></path>
                            <path fill="currentColor" d="M7 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></path>
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M2 9.5h20M9 21V10"></path>
                          </g>
                        </svg>
                        جدول بوت استرپ
                      </a>

                      <div className="collapse" id="13">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">جدول ساده</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">جدول دارک بیسیک</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">جدول با ابعاد متغیر</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">جدول با رنگ‌ بندی</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#14">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M2 11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z"></path>
                            <path strokeLinecap="round" d="M15 21V3"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m6 14l-1 1l1 1m4.5 0l1 1l-1 1M9 14l-1.5 4"></path>
                          </g>
                        </svg>
                        جدول های تعاملی
                      </a>

                      <div className="collapse" id="14">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">راه‌اندازی اولیه</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">رابط برنامه ‌نویسی کاربردی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">راه‌اندازی پیشرفته</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#" className="nav-link nav-text">نمودار ها</a>
                    </li>

                    <li>
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#15">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M6.222 4.601a9.5 9.5 0 0 1 1.395-.771c1.372-.615 2.058-.922 2.97-.33c.913.59.913 1.56.913 3.5v1.5c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586H17c1.94 0 2.91 0 3.5.912c.592.913.285 1.599-.33 2.97a9.5 9.5 0 0 1-10.523 5.435A9.5 9.5 0 0 1 6.222 4.601Z"></path>
                            <path d="M21.446 7.069a8.03 8.03 0 0 0-4.515-4.515C15.389 1.947 14 3.344 14 5v4a1 1 0 0 0 1 1h4c1.657 0 3.053-1.39 2.446-2.931Z"></path>
                          </g>
                        </svg>
                        نمودار های پیشرفته
                      </a>

                      <div className="collapse" id="15">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">نمودار خطی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">نمودار ناحیه‌ ای</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">نمودار میله‌ ای</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">نمودار دایره‌ ای</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">نمودار شعاعی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">نمودار راداری</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#" className="nav-link nav-text">نمونه صفحات وب</a>
                    </li>

                    <li>
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#16">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z"></path>
                            <path strokeLinecap="round" d="M8 10h8m-8 4h5"></path>
                          </g>
                        </svg>
                        صفحه پیش فرض
                      </a>

                      <div className="collapse" id="16">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">انیمیشن</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">نتیجه جستجو</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">گالری</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">ساختار درختی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">بلاک‌ کردن رابط کاربری</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">پایان زمان جلسه</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#" className="nav-link nav-text">نماد ها</a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M9 15c.85.63 1.885 1 3 1s2.15-.37 3-1"></path>
                            <ellipse fill="currentColor" cx="15" cy="9.5" rx="1" ry="1.5"></ellipse>
                            <ellipse fill="currentColor" cx="9" cy="9.5" rx="1" ry="1.5"></ellipse>
                            <path stroke="currentColor" strokeWidth="1.5" d="M22 19.723v-7.422C22 6.61 17.523 2 12 2S2 6.612 2 12.3v7.423c0 1.322 1.351 2.182 2.5 1.591a2.82 2.82 0 0 1 2.896.186a2.82 2.82 0 0 0 3.208 0l.353-.242a1.84 1.84 0 0 1 2.086 0l.353.242a2.82 2.82 0 0 0 3.208 0a2.82 2.82 0 0 1 2.897-.186c1.148.591 2.499-.269 2.499-1.591Z"></path>
                          </g>
                        </svg>
                        ایکون های داده ای
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path stroke="currentColor" strokeWidth="1.5" d="M2 12c0 5.523 4.477 10 10 10c.648 0 1.25-.3 1.708-.758l7.534-7.534C21.7 13.25 22 12.648 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12Z"></path>
                            <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M12 17c-1.115 0-2.15-.37-3-1"></path>
                            <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="currentColor"></ellipse>
                            <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor"></ellipse>
                            <path stroke="currentColor" strokeWidth="1.5" d="M12 22c0-2.793 0-4.19.393-5.312a7 7 0 0 1 4.295-4.295C17.811 12 19.208 12 22 12"></path>
                          </g>
                        </svg>
                        ایکون های نجومی
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link nav-text">ورود و ثبت نام</a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path stroke="currentColor" strokeWidth="1.5" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z"></path>
                            <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M12 8v4"></path>
                            <circle cx="12" cy="15" r="1" fill="currentColor"></circle>
                          </g>
                        </svg>
                        خطا
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#17">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z"></path>
                            <path strokeLinecap="round" d="M12 14v4m-6-8V8a6 6 0 1 1 12 0v2"></path>
                          </g>
                        </svg>
                        ورود به سیستم
                      </a>

                      <div className="collapse" id="17">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">ورود در سایدبار</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">صفحه ورود باکس‌ شده</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#18">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="6" r="4"></circle>
                            <circle cx="17" cy="18" r="4"></circle>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16.667v2.666M15.667 18h2.666"></path>
                            <path d="M14 20.834c-.634.108-1.305.166-2 .166c-3.866 0-7-1.79-7-4s3.134-4 7-4c1.713 0 3.283.352 4.5.936"></path>
                          </g>
                        </svg>
                        عضویت
                      </a>

                      <div className="collapse" id="18">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">رجیستر در ساید بار</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">ثبت‌ نام جعبه‌ ای</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#19">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 4h-2C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h2m3-16c3.114.01 4.765.108 5.828 1.172C22 6.343 22 8.229 22 12s0 5.657-1.172 6.828C19.765 19.892 18.114 19.99 15 20"></path>
                            <path fill="currentColor" d="M9 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></path>
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M15 2v20"></path>
                          </g>
                        </svg>
                        فراموشی رمز عبور
                      </a>

                      <div className="collapse" id="19">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">بازیابی رمز در ساید بار</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">فرم بازنشانی رمز باکس‌ شده</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#20">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M14.79 18.975C8.497 21.49 5.35 22.75 3.554 21.529a4.1 4.1 0 0 1-1.083-1.083c-1.221-1.797.037-4.944 2.554-11.236c.537-1.342.806-2.013 1.267-2.54q.177-.201.378-.378c.527-.461 1.198-.73 2.54-1.267c6.292-2.517 9.439-3.775 11.236-2.554c.426.29.793.657 1.083 1.083c1.221 1.797-.038 4.943-2.554 11.236c-.537 1.342-.806 2.013-1.267 2.54q-.177.201-.378.378c-.527.461-1.198.73-2.54 1.267Z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </g>
                        </svg>
                        احراز هویت دو مرحله ای
                      </a>

                      <div className="collapse" id="20">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">تایید دو مرحله‌ ای جانبی</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">ورود دو مرحله‌ ای کادر بندی‌ شده</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></path>
                            <path strokeLinecap="round" d="M7 4V2.5M17 4V2.5M2.5 9h19"></path>
                          </g>
                        </svg>
                        سرویس و تعمیرات
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link nav-text">مستندات</a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none">
                            <path stroke="currentColor" strokeWidth="1.5" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z"></path>
                            <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M12 8v4"></path>
                            <circle cx="12" cy="15" r="1" fill="currentColor"></circle>
                          </g>
                        </svg>

                        نحوه راه اندازی
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link nav-text">سایر موارد</a>
                    </li>

                    <li>
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#21">
                        <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z"></path>

                            <path strokeLinecap="round" opacity="0.5" d="M22 12s-.993.89-2.979 1.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12 2 12m20 4s-.993.89-2.979 1.685l-2.808 1.124C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.891 2 16 2 16"></path>
                          </g>
                        </svg>

                        لایه بندی منو
                      </a>

                      <div className="collapse" id="21">
                        <ul className="nav flex-column ms-3">
                          <li className="nav-item">
                            <a href="#" className="nav-link">مرحله ۱</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">مرحله ۱.۱</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">مرحله ۲</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">مرحله ۲.۱</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">مرحله ۳</a>
                          </li>

                          <li className="nav-item">
                            <a href="#" className="nav-link">مرحله ۳.۱</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" opacity="0.5" d="m18.5 5.5l-13 13"></path>

                            <circle cx="12" cy="12" r="10"></circle>
                          </g>
                        </svg>

                        مسدود شده
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="none" stroke="currentColor" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z"></path>
                        </svg>

                        زیر نویس
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path opacity="0.5" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z"></path>

                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.5 12.4l1.429 1.6l3.571-4"></path>
                          </g>
                        </svg>

                        تراشه
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m7.147 3.553a.75.75 0 0 1 1.05-.155c.728.54 1.607.852 2.553.852s1.825-.313 2.553-.852a.75.75 0 1 1 .894 1.204A5.77 5.77 0 0 1 12 17.75a5.77 5.77 0 0 1-3.447-1.148a.75.75 0 0 1-.156-1.049"></path>

                          <path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5m-6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5"></path>
                        </svg>

                        مشخص‌ شده
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link right">
                        <svg className="side-bar-svg margin-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6s4.243 0 5.121.879C14 7.757 14 9.172 14 12"></path>

                            <path d="M10 12c0 2.828 0 4.243.879 5.121C11.757 18 13.172 18 16 18s4.243 0 5.121-.879C22 16.243 22 14.828 22 12s0-4.243-.879-5.121C20.243 6 18.828 6 16 6"></path>
                          </g>
                        </svg>

                        لینک به منبع خارجی
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="d-flex button-menu">
                <div className="d-flex button-menu">
                  <button className="btn p-0 border-none button-menu" onClick={() => setShow(true)}>
                    <svg className="search-svg" viewBox="0 0 24 24">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="11.5" cy="11.5" r="9.5"></circle>
                        <path strokeLinecap="round" d="M18.5 18.5L22 22"></path>
                      </g>
                    </svg>
                  </button>

                  {show && (
                    <div className="modal d-block" tabIndex="-1">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header border-none">
                            <input type="text" className="form-control shadow-none" placeholder="جستجو کنید" />

                            <button type="button" className="btn-close me-auto ms-0 close-icon" onClick={() => setShow(false)}></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <button className="button-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample-2" aria-controls="offcanvasExample">
                <svg className="svg-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path opacity="0.5" d="M2.5 6.5a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm11 11a4 4 0 1 1 8 0a4 4 0 0 1-8 0Z"></path>
                    <path d="M21.5 6.5a4 4 0 1 0-8 0a4 4 0 0 0 8 0Zm-11 11a4 4 0 1 0-8 0a4 4 0 0 0 8 0Z"></path>
                  </g>
                </svg>
              </button>

              <div className="offcanvas offcanvas-start border-none" tabIndex="-1" id="offcanvasExample-2" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasExampleLabel">لینک‌ های کاربردی</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>

                <div className="offcanvas-body">
                  <ul className="nav flex-column">
                    <li>
                      <a href="#" className="nav-blue text-color right">
                        <div className="circle-bg blue-bg">
                          <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none">
                              <path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zm-8.532-5.475l.693-.287zm5.409 3.078l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zm-18.5 1v-1h-1.5v1zm-1.5 0c0 1.155 0 2.058.05 2.787c.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441c-.046-.666-.046-1.51-.046-2.685zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></path>
                              <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M8 9h8m-8 3.5h5.5"></path>
                            </g>
                          </svg>
                        </div>
                        اپلیکیشن چت
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-blue text-color right">
                        <div className="circle-bg light-green-bg">
                          <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeWidth="1.5">
                              <path d="M16.755 2h-9.51c-1.159 0-1.738 0-2.206.163a3.05 3.05 0 0 0-1.881 1.936C3 4.581 3 5.177 3 6.37v14.004c0 .858.985 1.314 1.608.744a.946.946 0 0 1 1.284 0l.483.442a1.657 1.657 0 0 0 2.25 0a1.657 1.657 0 0 1 2.25 0a1.657 1.657 0 0 0 2.25 0a1.657 1.657 0 0 1 2.25 0a1.657 1.657 0 0 0 2.25 0l.483-.442a.946.946 0 0 1 1.284 0c.623.57 1.608.114 1.608-.744V6.37c0-1.193 0-1.79-.158-2.27a3.05 3.05 0 0 0-1.881-1.937C18.493 2 17.914 2 16.755 2Z"></path>
                              <path strokeLinecap="round" d="M10.5 11H17M7 11h.5M7 7.5h.5m-.5 7h.5m3-7H17m-6.5 7H17"></path>
                            </g>
                          </svg>
                        </div>
                        نرم‌افزار مدیریت فاکتور
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-blue text-color right">
                        <div className="circle-bg green-bg">
                          <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none">
                              <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M19 22v-1.5M5 22v-1.5"></path>
                              <path fill="currentColor" d="M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></path>
                              <path stroke="currentColor" strokeWidth="1.5" d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12z"></path>
                              <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M2 14h20M2 8h20"></path>
                            </g>
                          </svg>
                        </div>
                        اپلیکیشن مخاطبین
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-blue text-color right">
                        <div className="circle-bg yellow-bg">
                          <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeWidth="1.5">
                              <path strokeLinecap="round" d="M22 10c.018.727 0 1.054 0 2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h3"></path>
                              <path strokeLinecap="round" d="m6 8l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296"></path>
                              <circle cx="19" cy="5" r="3"></circle>
                            </g>
                          </svg>
                        </div>
                        اپلیکیشن ایمیل
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-blue text-color right">
                        <div className="circle-bg red-bg">
                          <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeWidth="1.5">
                              <path strokeLinecap="round" d="m2 3l.265.088c1.32.44 1.98.66 2.357 1.184S5 5.492 5 6.883V9.5c0 2.828 0 4.243.879 5.121c.878.879 2.293.879 5.121.879h8"></path>
                              <path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3ZM5 6h11.45c2.055 0 3.083 0 3.528.674c.444.675.04 1.619-.77 3.508l-.429 1c-.378.882-.567 1.322-.942 1.57c-.376.248-.856.248-1.815.248H5"></path>
                            </g>
                          </svg>
                        </div>
                        پروفایل کاربری
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-blue text-color right">
                        <div className="circle-bg blue-bg">
                          <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none">
                              <path stroke="currentColor" strokeWidth="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></path>
                              <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 4V2.5M17 4V2.5M2.5 9h19"></path>
                              <path fill="currentColor" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></path>
                            </g>
                          </svg>
                        </div>
                        اپلیکیشن تقویم
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-blue text-color right">
                        <div className="circle-bg light-green-bg">
                          <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none">
                              <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M19 22v-1.5M5 22v-1.5"></path>
                              <path fill="currentColor" d="M13 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></path>
                              <path stroke="currentColor" strokeWidth="1.5" d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12z"></path>
                              <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M2 14h20M2 8h20"></path>
                            </g>
                          </svg>
                        </div>
                        جدول اطلاعات تماس
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-blue text-color right">
                        <div className="circle-bg green-bg">
                          <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeWidth="1.5">
                              <path d="M2 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2s2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6v12c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 22 7.4 22 6 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 20.1 2 19.4 2 18z"></path>
                              <path strokeLinecap="round" d="M7 19H5"></path>
                              <path d="m13.314 4.929l-2.142 2.142c-.578.578-.867.867-1.02 1.235C10 8.673 10 9.082 10 9.9v9.656l8.97-8.97c.99-.99 1.486-1.485 1.671-2.056a2.5 2.5 0 0 0 0-1.545c-.185-.57-.68-1.066-1.67-2.056s-1.486-1.485-2.056-1.67a2.5 2.5 0 0 0-1.545 0c-.571.185-1.066.68-2.056 1.67Z"></path>
                              <path d="M6 22h12c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 20.1 22 19.4 22 18s0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092C20.1 14 19.4 14 18 14h-2.5"></path>
                            </g>
                          </svg>
                        </div>
                        اپلیکیشن یادداشت‌
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="d-flex">
              <div className="button-menu">
                <div className="dropdown">
                  <button className="select-language p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <Image src={selectedLang.flag} width="30" height="30" className="flag-lang" alt={selectedLang.name} />
                  </button>

                  <ul className="dropdown-menu drop-water">
                    {languages.map((lang, index) => (
                      <li key={index} className="text-center" onClick={() => setSelectedLang(lang)}>
                        <a className="dropdown-item">
                          <Image src={lang.flag} width="30" height="30" className="flag-lang flag-margin" alt={lang.name} />
                          {lang.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button className="button-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample-6" aria-controls="offcanvasExample">
                <svg className="svg-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18.75 9.71v-.705C18.75 5.136 15.726 2 12 2S5.25 5.136 5.25 9.005v.705a4.4 4.4 0 0 1-.692 2.375L3.45 13.81c-1.011 1.575-.239 3.716 1.52 4.214a25.8 25.8 0 0 0 14.06 0c1.759-.498 2.531-2.639 1.52-4.213l-1.108-1.725a4.4 4.4 0 0 1-.693-2.375Z"></path>
                    <path strokeLinecap="round" opacity="0.5" d="M7.5 19c.655 1.748 2.422 3 4.5 3s3.845-1.252 4.5-3M12 6v4"></path>
                  </g>
                </svg>
              </button>

              <div className="offcanvas offcanvas-start border-none" tabIndex="-1" id="offcanvasExample-6" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header note-bg">
                  <h5 className="offcanvas-title text-white" id="offcanvasExampleLabel">نوتیفیکیشن‌ ها</h5>
                  <button type="button" className="btn-close filter-white" data-bs-dismiss="offcanvas"></button>
                </div>

                <div className="offcanvas-body">
                  <a href="#" className="live-sms">
                    <div className="circle-bg m-0 blue-bg">
                      <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path opacity="0.5" d="M2.5 6.5a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm11 11a4 4 0 1 1 8 0a4 4 0 0 1-8 0Z"></path>
                          <path d="M21.5 6.5a4 4 0 1 0-8 0a4 4 0 0 0 8 0Zm-11 11a4 4 0 1 0-8 0a4 4 0 0 0 8 0Z"></path>
                        </g>
                      </svg>
                    </div>

                    <div>
                      <div className="find">
                        <h6 className="inbox-h6">اجرای ادمین</h6>

                        <span className="inbox-span">۹:۳۰</span>
                      </div>

                      <span className="inbox-span-2">فقط ادمین جدید من را ببین</span>
                    </div>
                  </a>

                  <a href="#" className="live-sms">
                    <div className="circle-bg m-0 light-green-bg">
                      <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></path>
                          <path strokeLinecap="round" opacity="0.5" d="M7 4V2.5M17 4V2.5M2 9h20"></path>
                          <circle cx="16.5" cy="16.5" r="1.5"></circle>
                        </g>
                      </svg>
                    </div>

                    <div>
                      <div className="find">
                        <h6 className="inbox-h6">رویداد امروز</h6>

                        <span className="inbox-span">۹:۱۰</span>
                      </div>

                      <span className="inbox-span-2">فقط خواستم بگم که یک رویداد داری</span>
                    </div>
                  </a>

                  <a href="#" className="live-sms">
                    <div className="circle-bg m-0 red-bg">
                      <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path opacity="0.5" d="M7.843 3.802C9.872 2.601 10.886 2 12 2s2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594s-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22s-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7s1.571-1.59 3.6-2.792z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </g>
                      </svg>
                    </div>

                    <div>
                      <div className="find">
                        <h6 className="inbox-h6">تنظیمات</h6>

                        <span className="inbox-span">۹:۰۸</span>
                      </div>

                      <span className="inbox-span-2">این قالب قابل تنظیم برای نیازهای شماست</span>
                    </div>
                  </a>

                  <a href="#" className="live-sms">
                    <div className="circle-bg m-0 yellow-bg">
                      <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                          <path d="M14 12a6 6 0 1 1-6-6"></path>
                          <path opacity="0.5" d="M10 12a6 6 0 1 1 6 6"></path>
                        </g>
                      </svg>
                    </div>

                    <div>
                      <div className="find">
                        <h6 className="inbox-h6">شروع بخش ادمین</h6>

                        <span className="inbox-span">۹:۳۵</span>
                      </div>

                      <span className="inbox-span-2">یه نگاه به ادمین جدیدم بنداز</span>
                    </div>
                  </a>

                  <a href="#" className="live-sms">
                    <div className="circle-bg m-0 green-bg">
                      <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="4" rx="2" ry="2" width="18" height="18"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>

                    <div>
                      <div className="find">
                        <h6 className="inbox-h6">امروز رویداد داریم</h6>

                        <span className="inbox-span">۹:۱۷</span>
                      </div>

                      <span className="inbox-span-2">یادت نره یه رویداد داری</span>
                    </div>
                  </a>

                  <a href="#" className="live-sms">
                    <div className="circle-bg m-0 blue-bg">
                      <svg className="side-bar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                      </svg>
                    </div>

                    <div>
                      <div className="find">
                        <h6 className="inbox-h6">سفارشی‌ سازی</h6>

                        <span className="inbox-span">۹:۵۸</span>
                      </div>

                      <span className="inbox-span-2">میتونی این رو برام درست کنی</span>
                    </div>
                  </a>

                  <a href="#" className="note-sms-color">
                    <span className="text-white">همه پیام‌ هات رو چک کن</span>
                  </a>
                </div>
              </div>

              <button className="button-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample-4" aria-controls="offcanvasExample">
                <svg className="svg-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></path>
                    <path strokeLinecap="round" opacity="0.5" d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22M8 7h8m-6 3.5h4"></path>
                  </g>
                </svg>
              </button>

              <div className="offcanvas offcanvas-start border-none" tabIndex="-1" id="offcanvasExample-4" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header sms-bg">
                  <h5 className="offcanvas-title text-white" id="offcanvasExampleLabel">اطلاعیه‌ ها</h5>
                  <button type="button" className="btn-close filter-white" data-bs-dismiss="offcanvas"></button>
                </div>

                <div className="offcanvas-body">
                  <a href="#" className="live-sms">
                    <span>
                      <Image src="/user.jpg" width="30" height="30" layout="responsive" className="girl-img" alt="credit-card"></Image>
                    </span>

                    <div>
                      <div className="find">
                        <h6 className="inbox-h6">محمد همتی</h6>

                        <span className="inbox-span">۹:۳۰</span>
                      </div>

                      <span className="inbox-span-2">فقط ادمین جدید من را ببین</span>
                    </div>
                  </a>

                  <a href="#" className="live-sms">
                    <span>
                      <Image src="/user-girl-2.jpg" width="30" height="30" layout="responsive" className="girl-img" alt="credit-card"></Image>
                    </span>

                    <div>
                      <div className="find">
                        <h6 className="inbox-h6">سارا احمدی</h6>

                        <span className="inbox-span">۹:۱۰</span>
                      </div>

                      <span className="inbox-span-2">فقط خواستم بگم که یک رویداد داری</span>
                    </div>
                  </a>

                  <a href="#" className="live-sms">
                    <span>
                      <Image src="/user-boy.jpg" width="30" height="30" layout="responsive" className="girl-img" alt="credit-card"></Image>
                    </span>

                    <div>
                      <div className="find">
                        <h6 className="inbox-h6">علی محمدی</h6>

                        <span className="inbox-span">۹:۰۸</span>
                      </div>

                      <span className="inbox-span-2">این قالب قابل تنظیم برای نیازهای شماست</span>
                    </div>
                  </a>

                  <a href="#" className="live-sms">
                    <span>
                      <Image src="/user-girl.jpg" width="30" height="30" layout="responsive" className="girl-img" alt="credit-card"></Image>
                    </span>

                    <div>
                      <div className="find">
                        <h6 className="inbox-h6">فاطمه ابراهیمی</h6>

                        <span className="inbox-span">۹:۳۵</span>
                      </div>

                      <span className="inbox-span-2">یه نگاه به ادمین جدیدم بنداز</span>
                    </div>
                  </a>

                  <a href="#" className="live-sms">
                    <span>
                      <Image src="/user-boy-4.jpg" width="30" height="30" layout="responsive" className="girl-img" alt="credit-card"></Image>
                    </span>

                    <div>
                      <div className="find">
                        <h6 className="inbox-h6">حسین رحمتی</h6>

                        <span className="inbox-span">۹:۱۷</span>
                      </div>

                      <span className="inbox-span-2">یادت نره یه رویداد داری</span>
                    </div>
                  </a>

                  <a href="#" className="live-sms">
                    <span>
                      <Image src="/user-boy-6.jpg" width="30" height="30" layout="responsive" className="girl-img" alt="credit-card"></Image>
                    </span>

                    <div>
                      <div className="find">
                        <h6 className="inbox-h6">محمود طاهری</h6>

                        <span className="inbox-span">۹:۵۸</span>
                      </div>

                      <span className="inbox-span-2">میتونی این رو برام درست کنی</span>
                    </div>
                  </a>

                  <a href="#" className="live-sms-color">
                    <span className="text-white">همه پیام‌ هات رو چک کن</span>
                  </a>
                </div>
              </div>

              <button className="button-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample-3" aria-controls="offcanvasExample">
                <Image src="/user-boy-5.jpg" width="30" height="30" layout="responsive" className="boy-img" alt="credit-card"></Image>
              </button>

              <div className="offcanvas offcanvas-start border-none" tabIndex="-1" id="offcanvasExample-3" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasExampleLabel">حساب من</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>

                <div className="offcanvas-body">
                  <ul className="nav flex-column">
                    <li className="mb-4">
                      <a href="#" className="nav-blue text-color right">
                        <div className="circle-bg green-bg">
                          <Image src="/user-boy-5.jpg" width="30" height="30" layout="responsive" className="size-img" alt="credit-card"></Image>
                        </div>

                        <div>
                          <h5 className="h5-name">سینا احمدی</h5>
                          <p className="p-email">sina247re@gmail.com</p>
                        </div>
                      </a>
                    </li>

                    <div className="account-detail">پروفایل من</div>

                    <div className="account-detail">پروژه‌ های من</div>

                    <div className="account-detail">ورودی پیام‌ ها</div>

                    <div className="account-detail">تنظیمات حساب</div>

                    <div className="account-detail">خروج از سیستم</div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="row row-inner">
          <div className="col-lg-3 col-md-6 mb-1 mt-4">
            <div className="card credit-card-border">
              <div className="card-body p-9">
                <div className="credit-card-gap">
                  <div className="credit-card-box credit-card-blue">
                    <Image src="/credit-card.svg" width="30" height="30" layout="responsive" className="credit-card-img" alt="credit-card"></Image>
                  </div>

                  <div className="align-self-center">
                    <h3 className="credit-card-h3">۳۲۴,۹۰۰,۰۰۰</h3>

                    <span className="credit-card-span">مجموع درامد</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-1 mt-4">
            <div className="card credit-card-border">
              <div className="card-body p-9">
                <div className="credit-card-gap">
                  <div className="credit-card-box credit-card-green">
                    <Image src="/users.svg" width="30" height="30" layout="responsive" className="credit-card-img" alt="credit-card"></Image>
                  </div>

                  <div className="align-self-center">
                    <h3 className="credit-card-h3">۲۳۷,۶۰۰,۰۰۰</h3>

                    <span className="credit-card-span">درامد انلاین</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mt-4">
            <div className="card credit-card-border">
              <div className="card-body p-9">
                <div className="credit-card-gap">
                  <div className="credit-card-box credit-card-red">
                    <Image src="/calendar.svg" width="30" height="30" layout="responsive" className="credit-card-img" alt="credit-card"></Image>
                  </div>

                  <div className="align-self-center">
                    <h3 className="credit-card-h3">۱۷۹,۵۰۰,۰۰۰</h3>

                    <span className="credit-card-span">محصولات فیزیکی</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mt-4">
            <div className="card credit-card-border">
              <div className="card-body p-9">
                <div className="credit-card-gap">
                  <div className="credit-card-box credit-card-yellow">
                    <Image src="/gear.svg" width="30" height="30" layout="responsive" className="credit-card-img" alt="credit-card"></Image>
                  </div>

                  <div className="align-self-center">
                    <h3 className="credit-card-h3">۶۸,۷۰۰,۰۰۰</h3>

                    <span className="credit-card-span">هزینه تبلیغات</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 d-flex flex-column justify-content-between">
            <div className="card mb-4">
              <div className="card-body card-purple">
                <div className="card-purple-inner">
                  <div className="card-circle card-circle-purple">
                    <svg className="card-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M2 11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13zm0 1h20"></path>

                        <path strokeLinecap="round" d="M13.5 16.5H18m-4.5-9H18m-12 10v-2m0-7v-2m3 11v-2m0-7v-2"></path>
                      </g>
                    </svg>
                  </div>

                  <div>
                    <h4 className="card-h4">مصرف پهنای باند</h4>

                    <p className="card-p">فروردین ۱۴۰۴</p>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-12">
                    <h2 className="card-h2">۵۰ گیگابایت</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body card-green">
                <div className="card-purple-inner">
                  <div className="card-circle card-circle-green">
                    <svg className="card-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 22h18"></path>

                        <path d="M3 11c0-.943 0-1.414.293-1.707S4.057 9 5 9s1.414 0 1.707.293S7 10.057 7 11v6c0 .943 0 1.414-.293 1.707S5.943 19 5 19s-1.414 0-1.707-.293S3 17.943 3 17zm7-4c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17zm7-3c0-.943 0-1.414.293-1.707S18.057 2 19 2s1.414 0 1.707.293S21 3.057 21 4v13c0 .943 0 1.414-.293 1.707S19.943 19 19 19s-1.414 0-1.707-.293S17 17.943 17 17z"></path>
                      </g>
                    </svg>
                  </div>

                  <div>
                    <h4 className="card-h4">تعداد دانلود</h4>

                    <p className="card-p">فروردین ۱۴۰۴</p>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-12">
                    <h2 className="card-h2">۳۵۴۸۷</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card card-border">
              <div className="card-body pb-2">
                <h4 className="card-see">بازدید کنندگان ما</h4>

                <p className="card-detail">انواع دستگاه‌ های مورد استفاده کاربران</p>

                <div className="card-circle-chart">
                  <div style={{ width: "230px", height: "220px", position: "relative" }}>
                    <Doughnut data={data} options={options} />
                  </div>
                </div>
              </div>

              <div className="card-body card-chart">
                <ul className="card-ul">
                  <li className="card-li">
                    <div className="card-div mobile">
                      <svg className="card-svg-circle mobile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></path>
                      </svg>

                      موبایل
                    </div>
                  </li>

                  <li className="card-li">
                    <div className="card-div tablet">
                      <svg className="card-svg-circle tablet" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></path>
                      </svg>

                      تبلت
                    </div>
                  </li>

                  <li className="card-li">
                    <div className="card-div desktop">
                      <svg className="card-svg-circle desktop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></path>
                      </svg>

                      دسکتاپ
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card card-border">
              <div className="card-body pb-2">
                <h4 className="card-see">بازدید کنندگان انلاین</h4>

                <p className="card-detail">دستگاه‌ های مختلف کاربران برای دسترسی به سایت</p>

                <div className="card-circle-chart">
                  <MapContainer center={[32.4279, 53.6880]} zoom={4} style={{ width: "375px", height: "230px" }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    <CircleMarker center={[35.6892, 51.3890]} radius={6} color="#fefefe" fillColor="#26c6da" fillOpacity={1}></CircleMarker>

                    <CircleMarker center={[36.2605, 59.6168]} radius={6} color="#fefefe" fillColor="#1e88e5" fillOpacity={1}></CircleMarker>

                    <CircleMarker center={[34.6416, 50.8746]} radius={6} color="#fefefe" fillColor="#fc4b6c" fillOpacity={1}></CircleMarker>
                  </MapContainer>
                </div>
              </div>

              <div className="card-body card-chart">
                <ul className="card-ul">
                  <li className="card-li">
                    <div className="card-div tablet">
                      <svg className="card-svg-circle tablet" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></path>
                      </svg>

                      تهران
                    </div>
                  </li>

                  <li className="card-li">
                    <div className="card-div mobile">
                      <svg className="card-svg-circle mobile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></path>
                      </svg>

                      مشهد
                    </div>
                  </li>

                  <li className="card-li">
                    <div className="card-div other">
                      <svg className="card-svg-circle other" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></path>
                      </svg>

                      قم
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card blog-widget w-100 p-0 card-border">
              <div className="card-body p-2">
                <div className="">
                  <Image src="/blog.jpg" width="30" height="30" layout="responsive" className="blog-img" alt="credit-card"></Image>
                </div>

                <div className="blog-pad">
                  <div className="blog-tech">تکنولوژی</div>

                  <h4 className="blog-h4">توسعه کسب‌ و کار : قوانین جدید برای ۲۰۲۵</h4>

                  <p className="blog-p">شرکت‌ ها برای افزایش کارایی هوش مصنوعی را در اولویت قرار دادند</p>

                  <div className="d-flex justify-content-between align-items-center">
                    <a href="#" className="btn btn-primary btn-md btn-rounded mb-0 profile-a">بیشتر بخوانید</a>

                    <div>
                      <a href="#">
                        <svg className="blog-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M9 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></path>

                            <path strokeLinecap="round" d="M14 6.5L9 10m5 7.5L9 14"></path>

                            <path d="M19 18.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm0-13a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></path>
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mb-4">
            <div className="card card-border">
              <div className="card-body">
                <div className="chart-name">
                  <div>
                    <h4 className="chart-h4">تبلیغات خبرنامه‌ای</h4>

                    <p className="chart-p">نمای کلی کمپین خبرنامه</p>
                  </div>

                  <div className="chart-color">
                    <ul className="chart-ul">
                      <li className="d-flex">
                        <div className="chart-div chart-div-blue">
                          <svg className="chart-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></path>
                          </svg>
                          درصد مشاهده ایمیل
                        </div>
                      </li>

                      <li className="d-flex">
                        <div className="chart-div chart-div-green">
                          <svg className="chart-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></path>
                          </svg>
                          پرداخت‌ های دوره‌ای
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="chart-326">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={date}>
                      <CartesianGrid strokeDasharray="5 5" stroke="#e0e0e0" />
                      <Line type="monotone" dataKey="value2" stroke="#43ced7" strokeWidth={2} />
                      <Line type="monotone" dataKey="value1" stroke="#1b84ff" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="row text-center">
                  <div className="col-lg-4 col-md-4 mt-2">
                    <h2 className="chart-h2">۵۰۹۸</h2>

                    <small className="chart-small">مجموع ارسال‌ شده</small>
                  </div>

                  <div className="col-lg-4 col-md-4 mt-2">
                    <h2 className="chart-h2">۴۱۵۶</h2>

                    <small className="chart-small">درصد مشاهده ایمیل</small>
                  </div>

                  <div className="col-lg-4 col-md-4 mt-2">
                    <h2 className="chart-h2">۱۳۶۹</h2>

                    <small className="chart-small">میزان کلیک</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mb-4">
            <div className="card card-border card-body h-100 pb-3">
              <div className="d-md-flex no-block justify-content-between">
                <h4 className="project-h4">برترین پروژه‌ های ماه</h4>

                <div>
                  <select className="project-select form-select">
                    <option value="0">دی</option>

                    <option value="1">بهمن</option>

                    <option value="2">اسفند</option>

                    <option value="3">فروردین</option>
                  </select>
                </div>
              </div>

              <table>
                <thead>
                  <tr>
                    <th className="project-th project-width">کاربر</th>

                    <th className="project-th project-width">نام</th>

                    <th className="project-th project-width">اولویت</th>

                    <th className="project-th project-width">بودجه</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="table-tr">
                    <td className="project-color project-padding">
                      <div className="table-user">
                        <span>
                          <Image src="/user.jpg" width="30" height="30" layout="responsive" className="table-img" alt="credit-card"></Image>
                        </span>

                        <div>
                          <h5 className="table-h5">سینا احمدی</h5>

                          <p className="table-p">طراحی سایت</p>
                        </div>
                      </div>
                    </td>

                    <td className="project-color project-padding table-td">بازاریابی دیجیتال</td>

                    <td className="project-color project-padding table-low">کم</td>

                    <td className="project-color project-padding table-td">۳۹۰,۰۰۰</td>
                  </tr>

                  <tr className="table-tr">
                    <td className="project-color project-padding">
                      <div className="table-user">
                        <span>
                          <Image src="/user-boy.jpg" width="30" height="30" layout="responsive" className="table-img" alt="credit-card"></Image>
                        </span>

                        <div>
                          <h5 className="table-h5">محمد همتی</h5>

                          <p className="table-p">مدیریت پروژه</p>
                        </div>
                      </div>
                    </td>

                    <td className="project-color project-padding table-td">املاک واقعی</td>

                    <td className="project-color project-padding table-medium">متوسط</td>

                    <td className="project-color project-padding table-td">۲,۳۹۰,۰۰۰</td>
                  </tr>

                  <tr className="table-tr">
                    <td className="project-color project-padding">
                      <div className="table-user">
                        <span>
                          <Image src="/user-girl.jpg" width="30" height="30" layout="responsive" className="table-img" alt="credit-card"></Image>
                        </span>

                        <div>
                          <h5 className="table-h5">سارا محمدی</h5>

                          <p className="table-p">توسعه‌ دهنده</p>
                        </div>
                      </div>
                    </td>

                    <td className="project-color project-padding table-td">قلب پزشکی واقعی</td>

                    <td className="project-color project-padding table-high">زیاد</td>

                    <td className="project-color project-padding table-td">۱,۲۹۰,۰۰۰</td>
                  </tr>

                  <tr>
                    <td className="project-color project-padding">
                      <div className="table-user">
                        <span>
                          <Image src="/user-boy-2.jpg" width="30" height="30" layout="responsive" className="table-img" alt="credit-card"></Image>
                        </span>

                        <div>
                          <h5 className="table-h5">رضا حسینی</h5>

                          <p className="table-p">مهندس فرانت‌اند</p>
                        </div>
                      </div>
                    </td>

                    <td className="project-color project-padding table-td">پنل مدیریت</td>

                    <td className="project-color project-padding table-very-high">بسیار زیاد</td>

                    <td className="project-color project-padding table-td">۲۶۰,۰۰۰</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card card-border">
              <div className="card-body p-2">
                <Image src="/profile.jpg" width="30" height="30" layout="responsive" className="profile-img" alt="credit-card"></Image>

                <div className="card-body profile-card">
                  <div className="profile-div-up">
                    <Image src="/user.jpg" width="30" height="30" layout="responsive" className="user-img" alt="credit-card"></Image>
                  </div>

                  <h3 className="profile-h3">سینا احمدی</h3>

                  <p className="profile-p">طراح و توسعه‌ دهنده وب</p>

                  <a href="#" className="btn btn-primary btn-md btn-rounded profile-a">دنبال کردن</a>

                  <div className="row gx-lg-4 profile-div-down">
                    <div className="col-4">
                      <h3 className="profile-title">۱۰۹۹</h3>

                      <small className="profile-small">مقالات</small>
                    </div>

                    <div className="col-4">
                      <h3 className="profile-title">۲۳۴۶۹</h3>

                      <small className="profile-small">دنبال‌ کنندگان</small>
                    </div>

                    <div className="col-4">
                      <h3 className="profile-title">۶۰۳۵</h3>

                      <small className="profile-small">دنبال‌ شونده‌ ها</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="card card-border">
              <div className="card-body">
                <div className="d-md-flex align-items-center justify-content-between mb-4">
                  <div className="mb-3 mb-md-0">
                    <h4 className="blog-h4-2">کامنت‌ های جدید</h4>

                    <p className="blog-p-2">جدید ترین نظرات درباره کاربران از متریال</p>
                  </div>

                  <a href="#" className="btn btn-primary btn-md btn-rounded mb-0 profile-a">مشاهده همه</a>
                </div>

                <div>
                  <div className="blog-widget blog-border">
                    <span>
                      <Image src="/user-boy-3.jpg" width="30" height="30" layout="responsive" className="blog-person" alt="credit-card"></Image>
                    </span>

                    <div className="w-100">
                      <h5 className="blog-h5">سینا احمدی</h5>

                      <p className="blog-p-3">عملکرد پروژه بسیار روان و سریع است و تجربه کاربری عالی ارائه می‌دهد</p>

                      <div className="d-flex align-items-center">
                        <div className="mb-2 mb-md-0 blog-state">
                          <span className="blog-show blog-pend">در حال بررسی</span>

                          <ul className="blog-ul">
                            <li>
                              <a href="#">
                                <svg className="blog-svg-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5"></path>

                                    <path d="m16.652 3.455l.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649m-3.892-3.893s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298m-3.893-3.893L10.687 9.42c-.404.404-.606.606-.78.829q-.308.395-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9m12.133-6.552l-5.965 5.965c-.404.404-.606.606-.829.78a4.6 4.6 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579m0 0l-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122m1.688 1.688L8.412 13.9"></path>
                                  </g>
                                </svg>
                              </a>
                            </li>

                            <li>
                              <a href="#">
                                <svg className="blog-svg-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10"></circle>

                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.5 12.5l2 2l5-5"></path>
                                  </g>
                                </svg>
                              </a>
                            </li>

                            <li>
                              <a href="#">
                                <svg className="blog-svg-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path fill="currentColor" d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-5.612-.588C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339c1.43 1.61 3.254 2.9 4.68 4.024zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16z"></path>
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="blog-margin">
                          <span className="blog-date">۲۶ فروردین ۱۴۰۴</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="blog-widget blog-border">
                    <span>
                      <Image src="/user-boy-2.jpg" width="30" height="30" layout="responsive" className="blog-person" alt="credit-card"></Image>
                    </span>

                    <div className="w-100">
                      <h5 className="blog-h5">محمد همتی</h5>

                      <p className="blog-p-3">سازگاری با موبایل و ریسپانسیو بودن سایت به‌ خوبی اجرا شده است</p>

                      <div className="d-flex align-items-center">
                        <div className="mb-2 mb-md-0 blog-state">
                          <span className="blog-show blog-ok">تایید شده</span>

                          <ul className="blog-ul">
                            <li>
                              <a href="#">
                                <svg className="blog-svg-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5"></path>

                                    <path d="m16.652 3.455l.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649m-3.892-3.893s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298m-3.893-3.893L10.687 9.42c-.404.404-.606.606-.78.829q-.308.395-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9m12.133-6.552l-5.965 5.965c-.404.404-.606.606-.829.78a4.6 4.6 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579m0 0l-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122m1.688 1.688L8.412 13.9"></path>
                                  </g>
                                </svg>
                              </a>
                            </li>

                            <li>
                              <a href="#">
                                <svg className="blog-svg-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10"></circle>

                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.5 12.5l2 2l5-5"></path>
                                  </g>
                                </svg>
                              </a>
                            </li>

                            <li>
                              <a href="#">
                                <svg className="blog-svg-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path fill="currentColor" d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-5.612-.588C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339c1.43 1.61 3.254 2.9 4.68 4.024zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16z"></path>
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="blog-margin">
                          <span className="blog-date">۲۸ فروردین ۱۴۰۴</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="blog-widget">
                    <span>
                      <Image src="/user-boy-4.jpg" width="30" height="30" layout="responsive" className="blog-person" alt="credit-card"></Image>
                    </span>

                    <div className="w-100">
                      <h5 className="blog-h5">رضا محمدی</h5>

                      <p className="blog-p-3">پروژه از لحاظ عملکرد و طراحی استاندارد های بالایی را رعایت کرده است</p>

                      <div className="d-flex align-items-center">
                        <div className="mb-2 mb-md-0 blog-state">
                          <span className="blog-show blog-no">رد شده</span>

                          <ul className="blog-ul">
                            <li>
                              <a href="#">
                                <svg className="blog-svg-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5"></path>

                                    <path d="m16.652 3.455l.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649m-3.892-3.893s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298m-3.893-3.893L10.687 9.42c-.404.404-.606.606-.78.829q-.308.395-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9m12.133-6.552l-5.965 5.965c-.404.404-.606.606-.829.78a4.6 4.6 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579m0 0l-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122m1.688 1.688L8.412 13.9"></path>
                                  </g>
                                </svg>
                              </a>
                            </li>

                            <li>
                              <a href="#">
                                <svg className="blog-svg-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10"></circle>

                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.5 12.5l2 2l5-5"></path>
                                  </g>
                                </svg>
                              </a>
                            </li>

                            <li>
                              <a href="#">
                                <svg className="blog-svg-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path fill="currentColor" d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-5.612-.588C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339c1.43 1.61 3.254 2.9 4.68 4.024zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16z"></path>
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="blog-margin">
                          <span className="blog-date">۳۰ فروردین ۱۴۰۴</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="card card-border">
              <div className="card-body">
                <div className="d-md-flex align-items-center justify-content-between mb-4">
                  <div className="mb-3 mb-md-0">
                    <h4 className="blog-h4-2">لیست کار ها</h4>

                    <p className="blog-p-2">لیست کار های بعدی که باید انجام دهید</p>
                  </div>

                  <a href="#" className="btn btn-primary btn-md btn-rounded mb-0 profile-a">افزودن وظیفه</a>
                </div>

                <div>
                  <ul>
                    <li className="add-li add-border">
                      <div className="add-div">
                        <div className="d-flex align-items-center">
                          <input type="checkbox" className="add-check-box"></input>

                          <div className="add-margin">
                            <label className="add-label">
                              <h5 className="add-h5">برنامه‌ریزی با</h5>

                              <span className="add-show add-today">امروز</span>
                            </label>

                            <p className="add-p">محمد همتی</p>
                          </div>
                        </div>

                        <div>
                          <Image src="/add.jpg" width="30" height="30" layout="responsive" className="add-img" alt="credit-card"></Image>
                        </div>
                      </div>
                    </li>

                    <li className="add-li add-border">
                      <div className="add-div">
                        <div className="d-flex align-items-center">
                          <input type="checkbox" className="add-check-box"></input>

                          <div className="add-margin">
                            <label className="add-label">
                              <h5 className="add-h5">ارسال همه وظایف</h5>

                              <span className="add-show add-yesterday">دیروز</span>
                            </label>

                            <p className="add-p">به محمد همتی و گروه وار روم</p>
                          </div>
                        </div>

                        <div>
                          <Image src="/min.jpg" width="30" height="30" layout="responsive" className="add-img" alt="credit-card"></Image>
                        </div>
                      </div>
                    </li>

                    <li className="add-li add-border">
                      <div className="add-div">
                        <div className="d-flex align-items-center">
                          <input type="checkbox" className="add-check-box"></input>

                          <div className="add-margin">
                            <label className="add-label">
                              <h5 className="add-h5">تحویل گزارش خرید</h5>

                              <span className="add-show add-tomorrow">فردا</span>
                            </label>

                            <p className="add-p">به پدر و مادر</p>
                          </div>
                        </div>

                        <div>
                          <Image src="/max.jpg" width="30" height="30" layout="responsive" className="add-img" alt="credit-card"></Image>
                        </div>
                      </div>
                    </li>

                    <li className="add-li">
                      <div className="add-div">
                        <div className="d-flex align-items-center">
                          <input type="checkbox" className="add-check-box"></input>

                          <div className="add-margin">
                            <label className="add-label">
                              <h5 className="add-h5">رزرو پرواز</h5>

                              <span className="add-show add-week">پس فردا</span>
                            </label>

                            <p className="add-p">به امارات</p>
                          </div>
                        </div>

                        <div>
                          <Image src="/travel.jpg" width="30" height="30" layout="responsive" className="add-img" alt="credit-card"></Image>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html >
  );
}
