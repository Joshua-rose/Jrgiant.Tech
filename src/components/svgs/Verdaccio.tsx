/* eslint-disable max-len */
import React, { ReactElement } from 'react'

export default function Verdaccio(): ReactElement {
  return (
    <svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <polygon id="path-1" points="48 17.6 32.8 48 24 48 0.4 0.8 15.6 0.8 28.4 26.4 32.8 17.6 48 17.6" />
        <filter x="-20.0%" y="-11.7%" width="139.9%" height="140.3%" filterUnits="objectBoundingBox" id="filter-2">
          <feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
          <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.0906646286 0" type="matrix" in="shadowBlurOuter1" />
        </filter>
        <polygon id="path-3" points="50.8 12 35.6 12 41.2 0.8 56.4 0.8 50.8 12" />
        <filter x="-45.7%" y="-49.1%" width="191.3%" height="269.6%" filterUnits="objectBoundingBox" id="filter-4">
          <feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
          <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.0906646286 0" type="matrix" in="shadowBlurOuter1" />
        </filter>
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="logo-small-header-bottom">
          <g>
            <path
              d="M37,0 L63,0 C83.421,0 100,16.579 100,37 L100,63 C100,83.421 83.421,100 63,100 L37,100 C16.579,100 0,83.421 0,63 L0,37 C0,16.579 16.579,0 37,0 Z"
              id="Shape"
              fill="#F7F8F6"
            />
            <g
              id="Textmarke"
              transform="translate(28.400000, 77.000000)"
              fill="#405236"
              fontFamily="OpenSansLight-Italic, Open Sans"
              fontSize="10"
              fontStyle="italic"
              fontWeight="300"
            >
              <text id="Verdaccio">
                <tspan x="0.497" y="11.379">
                  Verdaccio
                </tspan>
              </text>
            </g>
            <g id="Bildmarke" transform="translate(22.000000, 26.000000)">
              <g id="Combined-Shape">
                <use fill="black" fillOpacity="1" filter="url(#filter-2)" />
                <path
                  stroke="#405236"
                  strokeWidth="2.4"
                  d="M46.0583592,18.8 L33.5416408,18.8 L28.4,29.0832816 L14.8583592,2 L2.34164079,2 L24.7416408,46.8 L32.0583592,46.8 L46.0583592,18.8 Z"
                  strokeLinejoin="miter"
                  fill="#405236"
                  fillRule="evenodd"
                />
              </g>
              <g id="Path">
                <use fill="black" fillOpacity="1" filter="url(#filter-4)" />
                <path
                  stroke="#CD4000"
                  strokeWidth="2.4"
                  d="M50.0583592,10.8 L54.4583592,2 L41.9416408,2 L37.5416408,10.8 L50.0583592,10.8 Z"
                  strokeLinejoin="miter"
                  fill="#CD4000"
                  fillRule="evenodd"
                />
              </g>
              <path
                d="M32.0607372,46.8 L34.6351125,41.6879866 L14.8572527,2 L2.34164079,2 L24.7416408,46.8 L32.0607372,46.8 Z"
                id="Combined-Shape"
                stroke="#405236"
                strokeWidth="2.4"
                fill="#4A5E3F"
              />
              <path d="M37.6,2 L52.8210381,2" id="Line-3" stroke="#CD4000" strokeWidth="2.4" strokeLinecap="square" />
              <path d="M33.6,6 L48.8210381,6" id="Line-3" stroke="#CD4000" strokeWidth="2.4" strokeLinecap="square" />
              <path d="M29.6,10.8 L44.8210381,10.8" id="Line-3" stroke="#CD4000" strokeWidth="2.4" strokeLinecap="square" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
