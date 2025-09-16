<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Oblivion</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #000;
            min-height: 100vh;
            color: white;
            position: relative;
            overflow-x: hidden;
        }

        /* Animated background particles */
        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        }

        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.7);
            border-radius: 50%;
            animation: float 10s linear infinite;
        }

        @keyframes float {
            0% { 
                transform: translateY(100vh) translateX(0px); 
                opacity: 0; 
            }
            10% { 
                opacity: 1; 
            }
            90% { 
                opacity: 1; 
            }
            100% { 
                transform: translateY(-100px) translateX(30px); 
                opacity: 0; 
            }
        }

        .container {
            position: relative;
            z-index: 2;
            padding: 60px 20px 40px;
            max-width: 400px;
            margin: 0 auto;
        }

        .header {
            text-align: center;
            margin-bottom: 40px;
        }

        .logo-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 30px;
            margin-bottom: 40px;
        }

        .chip-icon {
            width: 50px;
            height: 50px;
            position: relative;
        }

        .chip-outer {
            width: 50px;
            height: 50px;
            border: 3px solid #00d4ff;
            border-radius: 8px;
            position: relative;
            background: transparent;
        }

        .chip-inner {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20px;
            height: 20px;
            border: 2px solid #00d4ff;
            border-radius: 3px;
        }

        .chip-center {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 8px;
            height: 8px;
            background: #00d4ff;
            border-radius: 1px;
        }

        .title {
            font-size: 4rem;
            font-weight: 700;
            color: white;
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
            margin: 0;
            letter-spacing: -2px;
        }

        .discord-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            background: white;
            color: #333;
            padding: 16px 40px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            margin-bottom: 40px;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
        }

        .discord-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
        }

        .discord-icon {
            width: 24px;
            height: 24px;
            background: #5865F2;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 14px;
        }

        .main-section {
            background: rgba(0, 0, 0, 0.8);
            border-radius: 20px;
            padding: 30px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            margin-bottom: 20px;
            backdrop-filter: blur(10px);
        }

        .section-title {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 30px;
            color: white;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .shield-icon {
            width: 24px;
            height: 24px;
            border: 2px solid #00d4ff;
            border-radius: 6px;
            position: relative;
            background: transparent;
        }

        .shield-icon::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 8px;
            height: 8px;
            border: 1px solid #00d4ff;
            border-radius: 2px;
        }

        .features-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 30px;
        }

        .feature-card {
            background: rgba(0, 0, 0, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 20px 15px;
            text-align: center;
        }

        .feature-icon {
            width: 32px;
            height: 32px;
            border: 2px solid #00d4ff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 12px;
            background: transparent;
            position: relative;
        }

        .feature-icon::after {
            content: '';
            width: 12px;
            height: 12px;
            border: 1px solid #00d4ff;
            border-radius: 50%;
        }

        .feature-title {
            font-size: 0.9rem;
            font-weight: 500;
            color: white;
            line-height: 1.3;
        }

        .action-buttons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 25px;
        }

        .action-btn {
            background: linear-gradient(135deg, #ffd700, #ffb347);
            color: #000;
            padding: 16px;
            border-radius: 15px;
            text-align: center;
            font-weight: 700;
            font-size: 1.1rem;
            text-decoration: none;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
        }

        .action-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
        }

        .status-text {
            font-style: italic;
            color: #aaa;
            font-size: 0.85rem;
            text-align: center;
            line-height: 1.4;
        }

        .tutorial-section {
            background: rgba(0, 0, 0, 0.8);
            border-radius: 20px;
            padding: 25px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
        }

        .tutorial-header {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            font-size: 1.2rem;
            font-weight: 600;
            color: #00d4ff;
            margin-bottom: 15px;
        }

        .star-icon {
            color: #00d4ff;
            font-size: 1.1rem;
        }

        .tutorial-title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: rgba(255, 255, 255, 0.95);
            color: #333;
            padding: 15px 20px;
            border-radius: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s ease;
        }

        .tutorial-title:hover {
            background: white;
        }

        .folder-icon {
            color: #4285f4;
            font-size: 1.2rem;
        }

        .dropdown-arrow {
            font-size: 1.2rem;
            color: #666;
        }

        /* Responsive */
        @media (max-width: 480px) {
            .container {
                padding: 40px 15px;
                max-width: 350px;
            }
            
            .title {
                font-size: 3rem;
            }
            
            .logo-container {
                gap: 20px;
            }
            
            .chip-icon, .chip-outer {
                width: 40px;
                height: 40px;
            }
            
            .chip-inner {
                width: 16px;
                height: 16px;
            }
            
            .chip-center {
                width: 6px;
                height: 6px;
            }
        }
    </style>
</head>
<body>
    <div class="particles"></div>
    
    <div class="container">
        <div class="header">
            <div class="logo-container">
                <div class="chip-icon">
                    <div class="chip-outer">
                        <div class="chip-inner">
                            <div class="chip-center"></div>
                        </div>
                    </div>
                </div>
                <h1 class="title">Oblivion</h1>
                <div class="chip-icon">
                    <div class="chip-outer">
                        <div class="chip-inner">
                            <div class="chip-center"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <a href="https://discord.gg/MPHkrQXq" target="_blank" class="discord-btn">
                <div class="discord-icon">D</div>
                Join Discord
            </a>
        </div>

        <div class="main-section">
            <h2 class="section-title">
                <div class="shield-icon"></div>
                MAIN GENERATOR
                <div class="shield-icon"></div>
            </h2>
            
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon"></div>
                    <div class="feature-title">TikTok -<br>supported</div>
                </div>
                <div class="feature-card">
                    <div class="feature-icon"></div>
                    <div class="feature-title">Chrome -<br>supported</div>
                </div>
            </div>
            
            <div class="action-buttons">
                <button class="action-btn" onclick="window.open('https://logged.tg/auth/oblivionx', '_blank')">Generator</button>
                <button class="action-btn">Refresher</button>
            </div>
            
            <p class="status-text">
                If the Sites are down or Flagged be Patient as we are aware of this and working on fixing it asap
            </p>
        </div>

        <div class="tutorial-section">
            <div class="tutorial-header">
                <span class="star-icon">✨</span>
                Beaming Tutorial
                <span class="star-icon">✨</span>
            </div>
            <div class="tutorial-title" onclick="toggleTutorial()">
                <span class="folder-icon">📁</span>
                <span>Tutorials</span>
                <span class="dropdown-arrow">⌄</span>
            </div>
        </div>
    </div>

    <script>
        // Create floating particles
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.animationDelay = Math.random() * 10 + 's';
            particle.style.animationDuration = (Math.random() * 5 + 8) + 's';
            
            document.querySelector('.particles').appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 15000);
        }

        // Generate particles continuously
        setInterval(createParticle, 500);
        
        // Create initial particles
        for(let i = 0; i < 15; i++) {
            setTimeout(createParticle, i * 200);
        }

        // Tutorial toggle function
        function toggleTutorial() {
            alert('Tutorial section clicked!');
        }

        // Add some interactivity
        document.addEventListener('DOMContentLoaded', function() {
            // No additional JavaScript needed since links are handled by HTML
        });
    </script>
</body>
</html>
                            
