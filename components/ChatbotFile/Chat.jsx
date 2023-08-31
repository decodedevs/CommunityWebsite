// import React, { useEffect, useState } from 'react'
// import ChatBot from 'react-simple-chatbot'

// import styled from 'styled-components'

// export default function Chat() {

//     const steps = [
//         {
//             id: '0',
//             message: `Hii, what can i help you with today ? Try asking me community related questions directly and I will do my best. You could also type "List" to explore different topics that i can help you with.`,
//             trigger: '1'
//         },
//         {
//             id: '1',
//             user: true,
//             trigger: '2',
//         },
//         {
//             id: '2',
//             options: [
//                 { value: 'mentorship', label: 'Mentorship', trigger: '3' },
//                 { value: 'roadmap', label: 'Road Map', trigger: '4' },
//                 { value: 'up', label: 'Upcoming Events', trigger: '5' },
//                 { value: 'join', label: 'Join With Us', trigger: '6' },
//                 { value: 'footer', label: 'Connect With Us', trigger: '7' },
//             ]
//         },
//         {
//             id: '3',
//             message: "You are being redirected to Mentorship section.",
//             trigger: '2',
//         },
//         {
//             id: '4',
//             message: "You are being redirected to Road Map section.",
//             trigger: '2',
//         },
//         {
//             id: '5',
//             message: "Join our Discord channel to know about upcoming events.",
//             trigger: '2',
//         },
//         {
//             id: '6',
//             message: "You are being redirected to Join With Us section.",
//             trigger: '2',
//         },
//         {
//             id: '7',
//             message: "You are being redirected to Connect With Us section.",
//             trigger: '2',
//         },
//     ]

//     return (
//         <div className='border border-white'>
//             <ChatBot
//                 steps={steps}
//                 floating
//             />
//         </div>
//     )
// }
