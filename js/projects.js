const projects = [
    {
        id: 0,
        title: "Project Killer",
        role: "Gameplay & Networking Developer",
        description: "Developing a networked multiplayer horror game using Unreal Engine 5.7 (Blueprints). Built replicated gameplay systems including player movement synchronization, EOS multiplayer sessions, replicated item interactions, objective system, AI with Behavior Trees and AI Perception, player roles, inventory, abilities, and game state management. The project is actively being improved with additional mechanics, UI, and performance optimizations. Used Diversion for version control and collaborative project management.",
        tech: ["UE5", "Blueprints", "Networking", "EOS", "Multiplayer", "Diversion"],
        slides: [
            { type: "image", src: "images/projectkiller/lobby.jpg" },
            { type: "image", src: "images/projectkiller/ProjectKiller.png" },
            { type: "image", src: "images/projectkiller/1.png" },
            { type: "image", src: "images/projectkiller/2.png" },
            { type: "image", src: "images/projectkiller/3.png" },
            { type: "image", src: "images/projectkiller/4.png" },
            {type:"youtube",src:"https://www.youtube.com/embed/ZNgoftTLh7U?si=fxPO8RrzvrUnaNvu"},
            {type:"youtube",src:"https://www.youtube.com/embed/r2p5LANWQdw?si=9FuPRxwzvxrmv9pf"}
        ],
    },

    {
        id: 1,
        title: "Three Friends",
        role: "Gameplay Systems Developer",
        description: "Developed a complete 2D story-driven game in Unreal Engine using Blueprints. Designed multiple levels, implemented player mechanics, enemy AI, UI, game logic, scene transitions, and audio integration, creating a polished and immersive gameplay experience from start to finish. Used Diversion for version control and collaborative project management.",
        tech: ["UE5", "Blueprints", "2D Systems","Audio Integration","UMG","AI","Game Logic","Diversion"],
        slides: [
            { type: "image", src: "images/Three Friends/h.png" },
            { type: "image", src: "images/Three Friends/e.png" },
            { type: "image", src: "images/Three Friends/herrr.png" },
            { type: "image", src: "images/Three Friends/jherer.png" },
            { type: "image", src: "images/Three Friends/p.png" },
            { type: "image", src: "images/Three Friends/pre.png" },
            { type: "image", src: "images/Three Friends/s.png" },
            { type: "image", src: "images/Three Friends/sc.png" },
            { type: "image", src: "images/Three Friends/sp.png" },
            { type: "youtube", src: "https://www.youtube.com/embed/hN-93S0Zbzs?si=sWbO9_HoMS64DRYq" }
        ],
    },

    {
        id: 2,
        title: "Cinematic Sequences",
        role: "Cinematic Artist & Unreal Engine Developer",
        description: "Created two cinematic sequences in Unreal Engine 5 featuring unique environments and dynamic camera work. Used Sequencer to choreograph cinematic shots, camera movements, lighting, and scene composition, delivering polished real-time cinematics with a strong focus on visual storytelling.",
        tech: ["UE5", "Sequencer", "Cine Camera Actor", "Camera Rig", "Lighting","Environment Design","Real-Time Rendering"],
        slides: [
            { type: "image", src: "images/Cinematics/1.png" },
            { type: "image", src: "images/Cinematics/3.png" },
            { type: "youtube", src: "https://www.youtube.com/embed/2v-ZpqL8QpQ?si=Ruc4TzmMn4pKWcvR" },
            { type: "youtube", src: "https://www.youtube.com/embed/83DbEO_BJJ0?si=o5nD18AXrMW4f-l2" }  
        ],
    },

    {
        id: 3,
        title: "Cinematic Vehicle Racing Sequences",
        role: "Cinematic Artist & Unreal Engine Developer",
        description: "Created two cinematic racing sequences in Unreal Engine 5 featuring different vehicles and environments. Produced a high-speed buggy race in a desert environment using Fab assets and an off-road pickup truck race in a custom-built environment. Used Sequencer and Take Recorder to capture dynamic camera shots, realistic vehicle movement, and cinematic storytelling.",
        tech: ["UE5", "Sequence Recorder", "Fab Assets", "Cinematic", "Camera Setup", "Vehicle Setup", "Lighting","Camera Animation"],
        slides: [
            { type: "image", src: "images/car/3.png" },
            { type: "image", src: "images/car/2.png" },
            { type: "image", src: "images/car/1.png" },
            { type: "image", src: "images/car/4.png" },
            { type: "image", src: "images/car/12.png" },
            { type: "image", src: "images/car/13.png" },
            { type: "image", src: "images/car/14.png" },
            { type: "image", src: "images/car/15.png" },
            { type: "youtube", src: "https://www.youtube.com/embed/JTpAMIxTI0M?si=UWimdvt_xO4iIe7r" },
            { type: "youtube", src: "https://www.youtube.com/embed/rfN4WwbRVIM?si=vMPcP7ffwkwyGB4W" },
            { type: "youtube", src: "https://www.youtube.com/embed/JTpAMIxTI0M?si=3C3EtRddlzFcHS2f" } 
        ],
    },

    {
        id: 4,
        title: "Last Delivery",
        role: "Solo Unity Game Developer",
        description: "Built Last Delivery, a 2D sci-fi platformer where players navigate hazardous research facilities, collect Data Cores, and restore power while uncovering the story. Designed and developed the complete gameplay experience, including player mechanics, level progression, checkpoints, environmental hazards, mobile controls, UI, audio integration, and performance optimization for Android. Used Git & GitHub for version control and source code management.",
        tech: ["Unity 6", "C#", "Unity 2D Physics", "Unity UI", "Mobile Controls", "Audio Integration", "Performance Optimization","Git & Version Control"],
        button: {
            text: "Play on itch.io",
            url: "https://dineshrajasekaran04.itch.io/last-delivery"
        },
        slides: [
            { type: "image", src: "images/Last Delivery/ur.png" },
            { type: "image", src: "images/Last Delivery/1.png" },
            { type: "image", src: "images/Last Delivery/2.png" },
            { type: "image", src: "images/Last Delivery/3.png" },
            { type: "image", src: "images/Last Delivery/4.png" },
            { type: "image", src: "images/Last Delivery/5.png" },
            { type: "image", src: "images/Last Delivery/6.png" },
            { type: "image", src: "images/Last Delivery/7.png" },
            { type: "image", src: "images/Last Delivery/8.png" },

            {type:"youtube",src:"https://www.youtube.com/embed/6YsCXdTCg8E?si=NNzyw8TYNW4rjaEz"}
        ],
    }
];