import React from 'react'
import './Skills.css'
import { Card } from 'react-bootstrap'

const Skills = () => {
  return (
    <div className='skills-container'>
      <Card className='development skills'>
        <Card.Header className='title-header'>Development</Card.Header>
        <div className='flex'>
          <svg viewBox="0 0 128 128" className='project-img'>
            <g fill="#E434AA"><path d="M35.387 71.79L32.5 70.128l32.152-55.43 2.883 1.656zm0 0"></path><path d="M31.84 65.7h64.3v3.32h-64.3zm0 0"></path><path d="M65.273 86.05l-32.16-18.484 1.664-2.875 32.164 18.485zm0 0M93.215 37.871L61.05 19.387l1.668-2.871L94.879 35zm0 0"></path><path d="M34.785 37.86l-1.664-2.872 32.164-18.484 1.664 2.871zm0 0"></path><path d="M92.621 71.79L60.47 16.354l2.886-1.656 32.153 55.43zm0 0M34.39 32.79h3.333v36.968H34.39zm0 0"></path><path d="M90.277 32.79h3.332v36.968h-3.332zm0 0"></path><path d="M64.707 84.645l-1.457-2.508 27.973-16.078 1.457 2.507zm0 0"></path><path d="M98.027 70.836c-1.925 3.34-6.222 4.477-9.574 2.559a6.962 6.962 0 01-2.57-9.532c1.926-3.34 6.222-4.476 9.574-2.558 3.375 1.937 4.52 6.195 2.57 9.53M42.098 38.684c-1.926 3.336-6.223 4.476-9.575 2.558a6.967 6.967 0 01-2.57-9.535c1.926-3.336 6.223-4.477 9.574-2.559 3.352 1.942 4.496 6.196 2.57 9.536M29.973 70.836c-1.93-3.336-.785-7.594 2.57-9.531 3.352-1.918 7.629-.782 9.574 2.558 1.93 3.336.785 7.594-2.57 9.532-3.371 1.918-7.649.78-9.574-2.56M85.902 38.684c-1.925-3.34-.78-7.594 2.57-9.536 3.352-1.918 7.63-.777 9.575 2.559 1.93 3.34.785 7.594-2.57 9.535-3.352 1.918-7.649.778-9.575-2.558M64 90.402c-3.875 0-7.008-3.117-7.008-6.976 0-3.856 3.133-6.973 7.008-6.973s7.008 3.117 7.008 6.973c0 3.836-3.133 6.976-7.008 6.976M64 26.094c-3.875 0-7.008-3.117-7.008-6.977 0-3.855 3.133-6.972 7.008-6.972s7.008 3.117 7.008 6.972c0 3.86-3.133 6.977-7.008 6.977M106.625 121.508a.604.604 0 01-.45-.168.606.606 0 01-.171-.45v-18.464c0-.188.058-.34.172-.453a.604.604 0 01.449-.168h.54c.187 0 .339.054.452.168a.613.613 0 01.168.453v17.394h9.758c.207 0 .367.055.48.168.114.114.168.274.168.477v.426a.604.604 0 01-.168.449c-.113.113-.273.168-.48.168zm0 0M100.094 123.336a.704.704 0 01-.535-.238 8.22 8.22 0 01-.368-.407l-1.246-1.718c-1.129.543-2.449.816-3.957.816-1.566 0-2.894-.277-3.988-.828-1.094-.555-1.934-1.41-2.516-2.563-.586-1.156-.906-2.613-.96-4.378-.02-.844-.032-1.633-.032-2.364 0-.73.012-1.52.031-2.363.055-1.746.395-3.195 1.016-4.352.621-1.152 1.484-2.011 2.59-2.574 1.101-.562 2.387-.844 3.86-.844 1.468 0 2.753.282 3.859.844 1.101.563 1.968 1.422 2.601 2.574.63 1.157.965 2.606 1.004 4.352a57.2 57.2 0 01.055 2.363c0 .73-.02 1.52-.055 2.364-.094 2.683-.785 4.656-2.066 5.914l1.812 2.53a.41.41 0 01.055.099c.02.046.027.117.027.21a.535.535 0 01-.168.395.541.541 0 01-.394.168zm-6.106-3.234c1.621 0 2.953-.489 4-1.465 1.047-.977 1.606-2.563 1.684-4.758.035-.844.055-1.586.055-2.223 0-.636-.02-1.379-.055-2.222-.04-1.465-.309-2.657-.809-3.575-.5-.921-1.168-1.59-2.008-2.015-.835-.422-1.793-.633-2.867-.633-1.058 0-2.004.21-2.843.633-.84.426-1.508 1.094-2.008 2.015-.5.918-.778 2.11-.832 3.575-.02.843-.032 1.586-.032 2.222 0 .637.012 1.38.032 2.223.074 2.195.64 3.781 1.695 4.758 1.055.976 2.383 1.465 3.988 1.465zm0 0M70.855 121.508a.604.604 0 01-.449-.168.606.606 0 01-.172-.45v-18.75c0-.187.059-.335.172-.449a.604.604 0 01.45-.168h.48c.191 0 .34.055.453.168a.606.606 0 01.172.45v6.671a6.13 6.13 0 011.852-1.601c.726-.414 1.69-.621 2.898-.621 1.281 0 2.352.277 3.207.832.86.55 1.5 1.3 1.926 2.25.422.95.636 2.023.636 3.223v7.996a.606.606 0 01-.171.449.607.607 0 01-.454.168h-.48a.613.613 0 01-.453-.168.604.604 0 01-.168-.45v-7.855c0-1.5-.367-2.68-1.102-3.531-.738-.856-1.812-1.281-3.226-1.281-1.336 0-2.414.425-3.235 1.28-.82.852-1.23 2.032-1.23 3.532v7.856a.606.606 0 01-.172.449.607.607 0 01-.453.168zm0 0M54.43 126.855a.607.607 0 01-.453-.168.606.606 0 01-.172-.449v-18.746c0-.187.058-.34.172-.453a.607.607 0 01.453-.168h.48c.188 0 .34.055.453.168a.613.613 0 01.168.453v1.32c.473-.636 1.09-1.167 1.852-1.59.765-.421 1.73-.632 2.898-.632 1.114 0 2.047.191 2.801.578a5.114 5.114 0 011.836 1.531c.473.64.82 1.352 1.047 2.14.226.79.347 1.595.367 2.423.02.281.027.59.027.93 0 .335-.007.644-.027.925a9.539 9.539 0 01-.367 2.422c-.227.79-.574 1.5-1.047 2.14a5.114 5.114 0 01-1.836 1.532c-.754.387-1.687.578-2.8.578-1.169 0-2.134-.215-2.9-.648-.76-.43-1.378-.957-1.85-1.575v6.672a.604.604 0 01-.169.45.613.613 0 01-.453.167zm5.683-6.699c1.11 0 1.989-.242 2.63-.73a4.097 4.097 0 001.386-1.914c.281-.79.441-1.633.48-2.535a26.44 26.44 0 000-1.575 8.613 8.613 0 00-.48-2.535 4.117 4.117 0 00-1.387-1.914c-.64-.488-1.52-.73-2.629-.73-1.074 0-1.941.254-2.601.757a4.528 4.528 0 00-1.457 1.903 6.899 6.899 0 00-.524 2.293c-.02.281-.027.648-.027 1.097 0 .45.008.817.027 1.098.02.75.192 1.492.524 2.223a4.508 4.508 0 001.5 1.832c.668.488 1.52.73 2.558.73zm0 0M42.582 121.79a5.595 5.595 0 01-2.504-.563 5.079 5.079 0 01-1.851-1.508 3.436 3.436 0 01-.707-2.125c0-1.274.52-2.297 1.554-3.067 1.035-.77 2.383-1.265 4.043-1.492l4.469-.617v-.988c0-.993-.309-1.778-.918-2.348-.613-.574-1.59-.86-2.93-.86-.98 0-1.77.192-2.375.579-.601.383-1.015.886-1.242 1.504-.094.28-.273.422-.539.422h-.45c-.226 0-.386-.059-.484-.184a.687.687 0 01-.14-.434c0-.265.101-.593.297-.984.199-.395.504-.785.922-1.172.414-.383.949-.707 1.609-.969.66-.261 1.46-.394 2.402-.394 1.114 0 2.032.148 2.758.45.727.3 1.293.69 1.7 1.167.402.48.69 1.012.859 1.59.172.582.254 1.156.254 1.719v9.375a.604.604 0 01-.168.449.613.613 0 01-.453.168h-.481a.613.613 0 01-.453-.168.604.604 0 01-.168-.45v-1.324a4.776 4.776 0 01-.961 1.012c-.414.34-.95.625-1.598.86-.652.234-1.465.351-2.445.351zm.281-1.634c.867 0 1.66-.187 2.375-.562.715-.375 1.285-.953 1.711-1.73.426-.778.637-1.759.637-2.942v-.957l-3.648.508c-1.547.203-2.715.562-3.508 1.066-.79.508-1.188 1.145-1.188 1.914 0 .621.18 1.129.54 1.524.359.39.816.687 1.37.882.555.2 1.125.297 1.711.297zm0 0M29.629 121.508a.613.613 0 01-.453-.168.62.62 0 01-.168-.45v-13.37c0-.188.058-.344.168-.465a.594.594 0 01.453-.184h.453c.188 0 .344.063.469.184a.633.633 0 01.183.465v1.293a3.224 3.224 0 011.47-1.461c.64-.32 1.433-.48 2.374-.48h1.047c.188 0 .34.054.453.167a.613.613 0 01.168.453v.39c0 .192-.055.34-.168.454a.613.613 0 01-.453.168H34.41c-1.133 0-2.027.328-2.687.984-.66.657-.989 1.551-.989 2.676v8.727a.586.586 0 01-.183.449.67.67 0 01-.469.168zm0 0M17.387 121.79c-1.621 0-2.985-.313-4.086-.942a6.24 6.24 0 01-2.516-2.633c-.578-1.125-.89-2.422-.95-3.883-.019-.848-.026-1.738-.026-2.676 0-.937.007-1.828.027-2.676.059-1.48.371-2.78.95-3.898a6.237 6.237 0 012.53-2.617c1.11-.63 2.47-.942 4.07-.942 1.302 0 2.415.192 3.337.579.925.382 1.68.863 2.261 1.433.586.574 1.02 1.149 1.301 1.73.285.583.434 1.07.453 1.465a.446.446 0 01-.14.407.64.64 0 01-.453.156h-.622c-.171 0-.293-.043-.367-.125-.078-.086-.152-.23-.226-.438a5.107 5.107 0 00-.95-1.675c-.44-.535-1.035-.977-1.78-1.32-.743-.348-1.684-.524-2.813-.524-1.68 0-3.04.457-4.086 1.367-1.047.91-1.606 2.426-1.684 4.547a78.247 78.247 0 000 5.066c.078 2.102.637 3.61 1.684 4.532 1.047.918 2.406 1.379 4.086 1.379 1.113 0 2.11-.211 2.996-.633a4.726 4.726 0 002.094-1.946c.507-.87.761-1.984.761-3.332v-1.437H18.32a.594.594 0 01-.453-.184.654.654 0 01-.168-.465v-.394c0-.203.055-.363.168-.477a.613.613 0 01.453-.168h6.051c.207 0 .367.055.48.168.114.114.169.274.169.477v2.48c0 1.5-.297 2.825-.891 3.97a6.353 6.353 0 01-2.602 2.671c-1.14.637-2.52.957-4.14.957zm0 0"></path></g>
          </svg>
          <svg viewBox="0 0 128 128" className='project-img'>
            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
          </svg>
          <svg viewBox="0 0 128 128" className='project-img'>
            <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path><path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
          </svg>
          <svg viewBox="0 0 128 128" className='project-img'>
            <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
          </svg>
          <svg viewBox="0 0 128 128" className='project-img'>
            <path d="M40.53 77.82V50.74H42V55a5.57 5.57 0 00.48-.6 7.28 7.28 0 016.64-4.12c3.35-.1 6.07 1.14 7.67 4.12a13.24 13.24 0 01.32 12.14c-1.49 3.34-5.17 5-9.11 4.39a7.37 7.37 0 01-5.88-3.88v10.77zM42 60.32c.13 1.32.18 2.26.33 3.18.58 3.62 2.72 5.77 6.08 6.16A6.91 6.91 0 0056 65.27a11.77 11.77 0 00-.26-9.68 6.77 6.77 0 00-7.13-3.94 6.59 6.59 0 00-5.89 4.87 33.4 33.4 0 00-.72 3.8zM88.41 64a7.92 7.92 0 01-7.74 7c-6.16.31-9.05-3.78-9.51-8.5a13.62 13.62 0 011.2-7.5 8.37 8.37 0 018.71-4.67 8 8 0 017.1 6.09 41.09 41.09 0 01.69 4.5H72.67c-.3 4.28 2 7.72 5.26 8.55 4.06 1 7.53-.76 8.79-4.62.28-.99.79-1.13 1.69-.85zm-15.74-4.45h14.47c-.09-4.56-2.93-7.86-6.78-7.91-4.36-.07-7.5 3.11-7.69 7.91zM91.39 64.1h1.42a5.69 5.69 0 003.34 4.9 8.73 8.73 0 007.58-.2 3.41 3.41 0 002-3.35 3.09 3.09 0 00-2.08-3.09c-1.56-.58-3.22-.9-4.81-1.41A35.25 35.25 0 0194 59.18c-2.56-1.25-2.72-6.12.18-7.66a10.21 10.21 0 019.76-.15 5.14 5.14 0 012.6 5.24h-1.22c0-.06-.11-.11-.11-.17-.15-3.89-3.41-5.09-6.91-4.75a9.17 9.17 0 00-3 .91 3 3 0 00-1.74 3 3 3 0 002 2.82c1.54.56 3.15.92 4.73 1.36 1.27.35 2.59.58 3.82 1a4.51 4.51 0 013.1 4.07 4.81 4.81 0 01-2.59 5c-3.34 1.89-8.84 1.39-11.29-1a6.67 6.67 0 01-1.94-4.75zM125.21 56.61h-1.33c0-.18-.07-.34-.09-.49a4.35 4.35 0 00-3.54-4.18 8.73 8.73 0 00-5.61.27 3.41 3.41 0 00-2.47 3.25 3.14 3.14 0 002.4 3.16c2 .62 4.05 1 6.08 1.56a17 17 0 011.94.59 5 5 0 01.27 9.31 11.13 11.13 0 01-9 .09 6.24 6.24 0 01-3.76-6.06h1.3a7.29 7.29 0 0011.1 4.64 3.57 3.57 0 001.92-3.34 3.09 3.09 0 00-2.11-3.07c-1.56-.58-3.22-.89-4.81-1.4a35.43 35.43 0 01-4.87-1.75c-2.5-1.23-2.7-6.06.15-7.6a10.07 10.07 0 019.92-.11 5.23 5.23 0 012.51 5.13zM38.1 70.51a2.29 2.29 0 01-2.84-1.08c-1.63-2.44-3.43-4.77-5.16-7.15l-.75-1c-2.06 2.76-4.12 5.41-6 8.16a2.2 2.2 0 01-2.7 1.06l7.73-10.37-7.19-9.37a2.39 2.39 0 012.85 1c1.67 2.44 3.52 4.77 5.36 7.24 1.85-2.45 3.68-4.79 5.39-7.21a2.15 2.15 0 012.68-1l-2.79 3.7c-1.25 1.65-2.48 3.31-3.78 4.92a1 1 0 000 1.49c2.39 3.17 4.76 6.35 7.2 9.61zM70.92 50.66v1.4a7.25 7.25 0 00-7.72 7.49v11h-1.43V50.74h1.4v4.06c1.73-2.96 4.4-4.06 7.75-4.14zM2.13 60c.21-1 .34-2.09.63-3.11 1.73-6.15 8.78-8.71 13.63-4.9 2.84 2.23 3.55 5.39 3.41 8.95h-16c-.26 6.36 4.33 10.2 10.2 8.24a6.09 6.09 0 003.87-4.31c.31-1 .81-1.17 1.76-.88a8.12 8.12 0 01-3.88 5.93 9.4 9.4 0 01-10.95-1.4 9.85 9.85 0 01-2.46-5.78c0-.34-.13-.68-.2-1q-.01-.89-.01-1.74zm1.69-.43h14.47c-.09-4.61-3-7.88-6.88-7.91-4.32-.06-7.41 3.14-7.6 7.89z"></path>
          </svg>
          <svg viewBox="0 0 128 128" className='project-img'>
            <path fill="none" d="M0 0h128v128H0z"></path><path d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 01-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0010 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0026.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 01-2.61-6A9.12 9.12 0 0187.37 70h.34a9.15 9.15 0 011 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 01-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0016 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 00-17.27-20.85 62 62 0 00-34.74-10.59h-2.93a9.21 9.21 0 01-8 5.54h-.31a9.13 9.13 0 01-.3-18.25h.33a9 9 0 018 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 011.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 00-9.64 25.25 59.61 59.61 0 008.47 36.16 2.75 2.75 0 011.14-.16h.32a9.12 9.12 0 01.33 18.24h-.33a9.16 9.16 0 01-9.12-8.79z" fill="#764abc"></path>
          </svg>
        </div>
        {/* <h3>Not shown -- Apollo Client, REST API</h3> */}
      </Card>

      <Card className='workflow skills'>
        <Card.Header className='title-header'>Workflow</Card.Header>
        <div className='flex'>
          <svg viewBox="0 0 128 128" className='project-img'>
            <g fill="#181616"><path fillRule="evenodd" clipRule="evenodd" d="M64 1.512c-23.493 0-42.545 19.047-42.545 42.545 0 18.797 12.19 34.745 29.095 40.37 2.126.394 2.907-.923 2.907-2.047 0-1.014-.04-4.366-.058-7.92-11.837 2.573-14.334-5.02-14.334-5.02-1.935-4.918-4.724-6.226-4.724-6.226-3.86-2.64.29-2.586.29-2.586 4.273.3 6.523 4.385 6.523 4.385 3.794 6.504 9.953 4.623 12.38 3.536.383-2.75 1.485-4.628 2.702-5.69-9.45-1.075-19.384-4.724-19.384-21.026 0-4.645 1.662-8.44 4.384-11.42-.442-1.072-1.898-5.4.412-11.26 0 0 3.572-1.142 11.7 4.363 3.395-.943 7.035-1.416 10.65-1.432 3.616.017 7.258.49 10.658 1.432 8.12-5.504 11.688-4.362 11.688-4.362 2.316 5.86.86 10.187.418 11.26 2.728 2.978 4.378 6.774 4.378 11.42 0 16.34-9.953 19.938-19.427 20.99 1.526 1.32 2.886 3.91 2.886 7.88 0 5.692-.048 10.273-.048 11.674 0 1.13.766 2.458 2.922 2.04 16.896-5.632 29.07-21.574 29.07-40.365C106.545 20.56 87.497 1.512 64 1.512z"></path><path d="M37.57 62.596c-.095.212-.428.275-.73.13-.31-.14-.482-.427-.382-.64.09-.216.424-.277.733-.132.31.14.486.43.38.642zM39.293 64.52c-.203.187-.6.1-.87-.198-.278-.297-.33-.694-.124-.884.208-.188.593-.1.87.197.28.3.335.693.123.884zm1.677 2.448c-.26.182-.687.012-.95-.367-.262-.377-.262-.83.005-1.013.264-.182.684-.018.95.357.262.385.262.84-.005 1.024zm2.298 2.368c-.233.257-.73.188-1.093-.163-.372-.343-.475-.83-.242-1.087.237-.257.736-.185 1.102.163.37.342.482.83.233 1.086zm3.172 1.374c-.104.334-.582.485-1.064.344-.482-.146-.796-.536-.7-.872.1-.336.582-.493 1.067-.342.48.144.795.53.696.87zm3.48.255c.013.35-.396.642-.902.648-.508.012-.92-.272-.926-.618 0-.354.4-.642.908-.65.506-.01.92.272.92.62zm3.24-.551c.06.342-.29.694-.793.787-.494.092-.95-.12-1.014-.46-.06-.35.297-.7.79-.792.503-.088.953.118 1.017.466zm0 0"></path></g><path d="M24.855 108.302h-10.7a.5.5 0 00-.5.5v5.232a.5.5 0 00.5.5h4.173v6.5s-.937.32-3.53.32c-3.056 0-7.327-1.116-7.327-10.508 0-9.393 4.448-10.63 8.624-10.63 3.614 0 5.17.636 6.162.943.31.094.6-.216.6-.492l1.193-5.055a.468.468 0 00-.192-.39c-.403-.288-2.857-1.66-9.058-1.66-7.144 0-14.472 3.038-14.472 17.65 0 14.61 8.39 16.787 15.46 16.787 5.854 0 9.405-2.502 9.405-2.502.146-.08.162-.285.162-.38v-16.316a.5.5 0 00-.5-.5zM79.506 94.81H73.48a.5.5 0 00-.498.503l.002 11.644h-9.392V95.313a.5.5 0 00-.497-.503H57.07a.5.5 0 00-.498.503v31.53c0 .277.224.503.498.503h6.025a.5.5 0 00.497-.504v-13.486h9.392l-.016 13.486c0 .278.224.504.5.504h6.038a.5.5 0 00.497-.504v-31.53a.497.497 0 00-.497-.502zm-47.166.717c-2.144 0-3.884 1.753-3.884 3.923 0 2.167 1.74 3.925 3.884 3.925 2.146 0 3.885-1.758 3.885-3.925 0-2.17-1.74-3.923-3.885-3.923zm2.956 9.608H29.29c-.276 0-.522.284-.522.56v20.852c0 .613.382.795.876.795h5.41c.595 0 .74-.292.74-.805v-20.899a.5.5 0 00-.498-.502zm67.606.047h-5.98a.5.5 0 00-.496.504v15.46s-1.52 1.11-3.675 1.11-2.727-.977-2.727-3.088v-13.482a.5.5 0 00-.497-.504h-6.068a.502.502 0 00-.498.504v14.502c0 6.27 3.495 7.804 8.302 7.804 3.944 0 7.124-2.18 7.124-2.18s.15 1.15.22 1.285c.07.136.247.273.44.273l3.86-.017a.502.502 0 00.5-.504l-.003-21.166a.504.504 0 00-.5-.502zm16.342-.708c-3.396 0-5.706 1.515-5.706 1.515V95.312a.5.5 0 00-.497-.503H107a.5.5 0 00-.5.503v31.53a.5.5 0 00.5.503h4.192c.19 0 .332-.097.437-.268.103-.17.254-1.454.254-1.454s2.47 2.34 7.148 2.34c5.49 0 8.64-2.784 8.64-12.502s-5.03-10.988-8.428-10.988zm-2.36 17.764c-2.073-.063-3.48-1.004-3.48-1.004v-9.985s1.388-.85 3.09-1.004c2.153-.193 4.228.458 4.228 5.594 0 5.417-.935 6.486-3.837 6.398zm-63.689-.118c-.263 0-.937.107-1.63.107-2.22 0-2.973-1.032-2.973-2.368v-8.866h4.52a.5.5 0 00.5-.504v-4.856a.5.5 0 00-.5-.502h-4.52l-.007-5.97c0-.227-.116-.34-.378-.34h-6.16c-.238 0-.367.106-.367.335v6.17s-3.087.745-3.295.805a.5.5 0 00-.36.48v3.877a.5.5 0 00.497.503h3.158v9.328c0 6.93 4.86 7.61 8.14 7.61 1.497 0 3.29-.48 3.586-.59.18-.067.283-.252.283-.453l.004-4.265a.51.51 0 00-.5-.502z" fill="#100E0F"></path>
          </svg>
          <svg viewBox="0 0 128 128" className='project-img'>
            <path fill="#31251C" d="M76.397 55.676c-2.737 0-4.775 1.344-4.775 4.579 0 2.437 1.343 4.129 4.628 4.129 2.784 0 4.676-1.641 4.676-4.23 0-2.934-1.693-4.478-4.529-4.478zm-5.471 22.84c-.648.795-1.294 1.64-1.294 2.637 0 1.989 2.536 2.587 6.021 2.587 2.885 0 6.816-.202 6.816-2.885 0-1.595-1.892-1.693-4.281-1.843l-7.262-.496zm14.725-22.69c.895 1.145 1.842 2.737 1.842 5.026 0 5.522-4.329 8.756-10.597 8.756-1.594 0-3.037-.198-3.932-.447l-1.642 2.637 4.875.297c8.608.549 13.682.798 13.682 7.413 0 5.723-5.024 8.955-13.682 8.955-9.006 0-12.438-2.289-12.438-6.218 0-2.24.996-3.431 2.737-5.076-1.643-.694-2.189-1.937-2.189-3.281 0-1.095.547-2.09 1.443-3.036.896-.944 1.891-1.891 3.084-2.985-2.438-1.194-4.278-3.781-4.278-7.464 0-5.721 3.781-9.65 11.393-9.65 2.14 0 3.435.197 4.578.498h9.703v4.228l-4.579.347zm13.332-9.04c-2.837 0-4.479-1.643-4.479-4.48 0-2.833 1.642-4.377 4.479-4.377 2.886 0 4.527 1.543 4.527 4.377.001 2.837-1.641 4.48-4.527 4.48zm-6.42 29.9v-3.929l2.539-.348c.696-.1.795-.249.795-.997V56.785c0-.546-.148-.896-.647-1.044l-2.687-.946.547-4.028h10.301v20.646c0 .798.048.896.796.997l2.538.348v3.929H92.563v-.001zm33.857-1.93c-2.141 1.043-5.274 1.99-8.112 1.99-5.92 0-8.158-2.386-8.158-8.011V55.7c0-.297 0-.497-.399-.497h-3.482v-4.428c4.38-.499 6.12-2.688 6.667-8.111h4.728v7.067c0 .347 0 .498.398.498h7.015v4.975h-7.413v11.89c0 2.935.697 4.079 3.383 4.079 1.395 0 2.836-.347 4.03-.795l1.343 4.378z"></path><path fill="#F34F29" d="M52.7 61.7L29.951 38.952a3.355 3.355 0 00-4.744 0l-4.724 4.724 5.991 5.992a3.983 3.983 0 014.1.956 3.988 3.988 0 01.947 4.125l5.775 5.775a3.988 3.988 0 014.125 6.593 3.992 3.992 0 01-6.516-4.342l-5.386-5.386-.001 14.174a3.992 3.992 0 011.056 6.401 3.993 3.993 0 11-4.339-6.518V57.141a3.99 3.99 0 01-2.167-5.236l-5.906-5.908L2.563 61.595a3.356 3.356 0 000 4.747L25.312 89.09a3.357 3.357 0 004.746 0L52.7 66.446a3.355 3.355 0 000-4.746z"></path><path fill="none" d="M1.58 37.928h124.84v52.143H1.58z"></path>
          </svg>
        </div>
        {/* <h3>Not shown -- Github projects, TDD, Agile, Miro, Netlify, Vercel, npm</h3> */}
      </Card>

      <Card className='testing skills'>
        <Card.Header className='title-header'>Testing</Card.Header>
        <div className='flex'>
          <svg viewBox="0 0 128 128" className='project-img'>
            <g fill="#8d6748"><path d="M91.78 58.77l-2.3 5.42h4.61l-2.31-5.42zM60.91 52h4a1 1 0 00.54-.24C67.77 49 68.1 43.6 68.1 41.7a.7.7 0 00-.68-.7h-9a.68.68 0 00-.68.68c.07 1.9.34 7.36 2.65 10.08a.65.65 0 00.52.24zm4.41-5.16C67 46.23 67 45.62 67 45.62a10.69 10.69 0 01-2 5.24.51.51 0 01-.41.15h-3.34c-.14 0-.34 0-.41-.15a9.6 9.6 0 01-1.7-3.77s3.94.56 6.18-.25z"></path><path d="M116.42 29.94L67.48 1.72a6.83 6.83 0 00-6.83 0L11.6 29.94A6.9 6.9 0 008 35.78v56.44a7 7 0 003.58 5.83l48.94 28.22a6.83 6.83 0 006.83 0l49.05-28.21a7.14 7.14 0 003.6-5.83V35.78a7 7 0 00-3.58-5.84zM112 88.29a5.77 5.77 0 01-2.94 5l-42.2 24.37a5.65 5.65 0 01-5.84 0L18.87 93.31a5.63 5.63 0 01-2.87-5V39.58a5.71 5.71 0 012.87-5L61 10.2a5.6 5.6 0 015.82 0l42.21 24.35a5.69 5.69 0 012.93 5z"></path><circle cx="40" cy="62.53" r="4.84"></circle><path d="M108.06 36.32L65.85 12a3.87 3.87 0 00-1.91-.54A4.06 4.06 0 0062 12L19.87 36.32A3.88 3.88 0 0018 39.65v48.7a3.87 3.87 0 001.87 3.32L62 116a3.62 3.62 0 001.89.54 3.82 3.82 0 001.9-.54l42.23-24.35a3.94 3.94 0 001.98-3.3v-48.7a3.94 3.94 0 00-1.94-3.33zM67 68.19a4.8 4.8 0 003.65-1.69l1.52 1.5a7.7 7.7 0 01-1.08 1 5.9 5.9 0 01-1.22.75 5 5 0 01-1.42.47 8.33 8.33 0 01-1.83.14 6.72 6.72 0 01-4.88-2 6.1 6.1 0 01-1.3-2.24 7.34 7.34 0 01-.44-2.73v-.07a7.12 7.12 0 01.42-2.71 7.63 7.63 0 011.36-2.24A6.35 6.35 0 0164 56.88a7.53 7.53 0 012.83-.54 13.09 13.09 0 011.69.14c.54.14.95.27 1.42.41a6.43 6.43 0 011.15.68 11.79 11.79 0 011 .88l-1.56 1.63A4.83 4.83 0 1067 68.19zm-2.83-37.63c-.34.47.07 1.63.95 3a2.83 2.83 0 01-.95 4 3.83 3.83 0 00-.75-2.31c-1.62-2.46-.13-3.61.75-4.69zm-2.71 2.51c-.27.27 0 1.09.61 2a1.91 1.91 0 01-.61 2.71 2.74 2.74 0 00-.46-1.53c-1.1-1.69-.15-2.44.46-3.18zM56.5 39h12.76a.64.64 0 01.68.63c0 2.37-.34 10.37-3.74 14.14a.64.64 0 01-.47.23H60a.67.67 0 01-.47-.26c-3.37-3.86-3.7-11.74-3.7-14.08a.66.66 0 01.67-.66zM21 49h34.35s.07 0 .07 1H21zm34 14.32v.07a7.37 7.37 0 01-.47 2.71 6.7 6.7 0 01-1.46 2.24 6.4 6.4 0 01-2.22 1.49 6.63 6.63 0 01-2.84.54 7.86 7.86 0 01-2.84-.54 6.47 6.47 0 01-2.24-1.49 6.3 6.3 0 01-1.41-2.24 7.16 7.16 0 01-.52-2.71v-.07a7.43 7.43 0 01.53-2.71A6.79 6.79 0 0143 58.37a6.46 6.46 0 012.23-1.49 6.66 6.66 0 012.85-.54 7.88 7.88 0 012.85.54 6.48 6.48 0 012.24 1.49 6.18 6.18 0 011.35 2.24 7.14 7.14 0 01.48 2.71zM29.1 67H29l-4-6.46V70h-3V57h3l4.14 6.38L33.23 57H36v13h-3v-9.53zm77.9 8H21v-1h86zM86 62v-5h2v13h-2v-6h-7v6h-2V57h2v5zm6.73 8l6-13h2.17l6 13h-2.51L103 67h-6.4l-1.42 3zM107 50H70.41c0-1 .07-1 .07-1H107z"></path></g>
          </svg>
          <img className='project-img' src='https://raw.githubusercontent.com/cypress-io/cypress/develop/assets/cypress-logo-light.png' alt='cypress logo' title='Cypress'/>
        </div>
      </Card>
      
      {/* <div className='accessibility skill'>
        <h2>Accessibility</h2>
        <h3>Not shown -- Lighthouse, WAVE, ColorBlindness Extension</h3>
      </div> */}
      
      <Card className='web-design skills'>
        <Card.Header className='title-header' >Web Design</Card.Header>
        <div className='flex'>
        
          {/* bootstrap, mui, figma, trello, css, html */}
        </div>
      </Card>    
    </div>
  )
}

export default Skills