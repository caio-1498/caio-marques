import React from 'react';
import ParticlesBackground from './ui/ParticlesBackground';

const BackgroundHome = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-black">
            <ParticlesBackground
                particleColors={['#ffffff', '#ffffff']}
                particleCount={300}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
                className="w-full h-full"
            />
        </div>
    );
};

export default BackgroundHome;
