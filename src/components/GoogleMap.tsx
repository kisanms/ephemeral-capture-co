import React from 'react';

interface GoogleMapProps {
  className?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ className = "" }) => {
  // Company location coordinates (Richmond, VA)
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.492900233068!2d72.86925587471723!3d21.132773984198913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051fab9e87f0f%3A0x8268c5d71a2e2d7b!2sThe%20Moment%20Maker%20Film's!5e0!3m2!1sen!2sin!4v1757231593703!5m2!1sen!2sin";
  return (
    <div className={`relative w-full h-96 rounded-lg overflow-hidden shadow-warm-md ${className}`}>
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="The Moment Maker Films Location"
        className="w-full h-full"
      ></iframe>

      {/* Overlay with company info */}
      <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm p-4 rounded-lg shadow-warm border border-border max-w-xs">
        <h4 className="font-serif font-semibold text-foreground mb-2">
          The Moment Maker Films
        </h4>
        <p className="text-sm text-muted-foreground mb-1">
          Richmond, Virginia
        </p>
        <p className="text-xs text-muted-foreground">
          Available by appointment
        </p>
      </div>
    </div>
  );
};

export default GoogleMap;