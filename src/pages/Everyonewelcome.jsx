import React, { useState } from 'react';
import { Camera, Anchor, MapPin, Calendar, Users, Ship, Heart } from 'lucide-react';

const EveryoneWelcomeCruise = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const ports = [
    {
      name: "Galveston, Texas",
      day: "Day 1",
      description: "Embarkation day! Board the beautiful MSC Seascape and settle into your home for the next week.",
      icon: Ship
    },
    {
      name: "Costa Maya, Mexico",
      day: "Day 3",
      description: "Pristine beaches, ancient Mayan ruins, and turquoise waters. Perfect for snorkeling or just relaxing.",
      icon: MapPin
    },
    {
      name: "Isla de Roatán, Honduras",
      day: "Day 4",
      description: "One of the world's best diving spots with incredible coral reefs and laid-back island vibes.",
      icon: Anchor
    },
    {
      name: "Cozumel, Mexico",
      day: "Day 5",
      description: "Shopping, authentic Mexican food, beaches, and adventure. Something for everyone.",
      icon: Camera
    },
    {
      name: "Back to Galveston",
      day: "Day 8",
      description: "Disembarkation. Return home with memories and maybe a few souvenirs.",
      icon: Heart
    }
  ];

  const cabinTypes = [
    { type: "Interior", price: "$710", description: "Cozy inside cabin, perfect for budget-conscious travelers" },
    { type: "Ocean View", price: "$1,130", description: "Natural light and ocean views from your room" },
    { type: "Balcony", price: "$1,290+", description: "Private balcony, fresh air, and stunning sea views" }
  ];

  return (
    <div style={{
      fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      color: '#1F2937',
      background: 'linear-gradient(to bottom, #F9FAFB 0%, #ffffff 100%)',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #007298 0%, #005a7a 100%)',
        color: 'white',
        padding: '4rem 1.5rem 3rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.3
        }}></div>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(245, 158, 11, 0.2)',
            padding: '0.5rem 1rem',
            borderRadius: '50px',
            marginBottom: '1rem',
            border: '1px solid rgba(245, 158, 11, 0.3)'
          }}>
            <span style={{ color: '#F59E0B', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.05em' }}>
              SEPTEMBER 13-20, 2026
            </span>
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            fontWeight: 800,
            margin: '0 0 1rem 0',
            lineHeight: 1.1,
            letterSpacing: '-0.02em'
          }}>
            Everyone Welcome
          </h1>
          
          <p style={{
            fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
            margin: '0 0 1.5rem 0',
            opacity: 0.95,
            maxWidth: '600px',
            lineHeight: 1.5
          }}>
            7 nights aboard MSC Seascape exploring the Western Caribbean with Happy Detour Travel
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            alignItems: 'center',
            marginTop: '2rem'
          }}>
            <a 
              href="#booking-form" 
              style={{
                background: '#F59E0B',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.125rem',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)'
              }}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Reserve Your Spot
            </a>
            
            <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>
              <strong style={{ fontSize: '1.25rem' }}>Starting at $710</strong> per person
            </div>
          </div>
        </div>
      </div>

      {/* Ship Info Banner */}
      <div style={{
        background: '#1F2937',
        color: 'white',
        padding: '2rem 1.5rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div>
              <Ship size={32} style={{ margin: '0 auto 0.5rem', opacity: 0.8 }} />
              <div style={{ fontSize: '0.875rem', opacity: 0.7, marginBottom: '0.25rem' }}>SHIP</div>
              <div style={{ fontSize: '1.125rem', fontWeight: 600 }}>MSC Seascape</div>
            </div>
            <div>
              <Calendar size={32} style={{ margin: '0 auto 0.5rem', opacity: 0.8 }} />
              <div style={{ fontSize: '0.875rem', opacity: 0.7, marginBottom: '0.25rem' }}>DEPARTURE</div>
              <div style={{ fontSize: '1.125rem', fontWeight: 600 }}>September 13, 2026</div>
            </div>
            <div>
              <MapPin size={32} style={{ margin: '0 auto 0.5rem', opacity: 0.8 }} />
              <div style={{ fontSize: '0.875rem', opacity: 0.7', marginBottom: '0.25rem' }}>PORT</div>
              <div style={{ fontSize: '1.125rem', fontWeight: 600 }}>Galveston, Texas</div>
            </div>
            <div>
              <Users size={32} style={{ margin: '0 auto 0.5rem', opacity: 0.8 }} />
              <div style={{ fontSize: '0.875rem', opacity: 0.7', marginBottom: '0.25rem' }}>DURATION</div>
              <div style={{ fontSize: '1.125rem', fontWeight: 600 }}>7 Nights / 8 Days</div>
            </div>
          </div>
        </div>
      </div>

      {/* Itinerary Section */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 1.5rem'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 700,
          marginBottom: '1rem',
          color: '#007298',
          textAlign: 'center'
        }}>
          Your Journey
        </h2>
        <p style={{
          fontSize: '1.125rem',
          color: '#6B7280',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto 3rem'
        }}>
          Seven nights exploring some of the most beautiful ports in the Western Caribbean
        </p>

        <div style={{
          display: 'grid',
          gap: '1.5rem'
        }}>
          {ports.map((port, index) => {
            const Icon = port.icon;
            return (
              <div key={index} style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '1.5rem',
                alignItems: 'start',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 114, 152, 0.15)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                <div style={{
                  background: 'linear-gradient(135deg, #007298 0%, #005a7a 100%)',
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Icon size={28} color="white" />
                </div>
                <div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#F59E0B',
                    fontWeight: 600,
                    marginBottom: '0.25rem',
                    letterSpacing: '0.05em'
                  }}>
                    {port.day}
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    margin: '0 0 0.5rem 0',
                    color: '#1F2937'
                  }}>
                    {port.name}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#6B7280',
                    margin: 0,
                    lineHeight: 1.6
                  }}>
                    {port.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pricing Section */}
      <div style={{
        background: 'linear-gradient(to bottom, #F9FAFB 0%, #ffffff 100%)',
        padding: '4rem 1.5rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            marginBottom: '1rem',
            color: '#007298',
            textAlign: 'center'
          }}>
            Cabin Options
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            All prices are per person and include taxes and fees
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {cabinTypes.map((cabin, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                textAlign: 'center',
                border: index === 1 ? '2px solid #007298' : '2px solid transparent',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 114, 152, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                {index === 1 && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#F59E0B',
                    color: 'white',
                    padding: '0.25rem 1rem',
                    borderRadius: '50px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em'
                  }}>
                    POPULAR
                  </div>
                )}
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#1F2937',
                  marginBottom: '0.5rem'
                }}>
                  {cabin.type}
                </h3>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 800,
                  color: '#007298',
                  margin: '1rem 0',
                  lineHeight: 1
                }}>
                  {cabin.price}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#6B7280',
                  marginBottom: '0.5rem'
                }}>
                  per person
                </div>
                <p style={{
                  fontSize: '1rem',
                  color: '#6B7280',
                  lineHeight: 1.6,
                  margin: '1.5rem 0 0 0'
                }}>
                  {cabin.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: '#FEF3C7',
            borderRadius: '12px',
            border: '1px solid #F59E0B',
            textAlign: 'center'
          }}>
            <p style={{
              margin: 0,
              color: '#92400E',
              fontSize: '1rem',
              lineHeight: 1.6
            }}>
              <strong>Planning is always free.</strong> All pricing includes government fees and taxes. Final payment due 90 days before departure.
            </p>
          </div>
        </div>
      </div>

      {/* What's Included Section */}
      <div style={{
        background: 'white',
        padding: '4rem 1.5rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            marginBottom: '1rem',
            color: '#007298',
            textAlign: 'center'
          }}>
            What's Included
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            MSC Fantastica experience includes cabin choice and these great benefits
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              'All meals in main dining rooms',
              'Complimentary room service',
              'Entertainment and shows',
              'Kids clubs and activities',
              'Fitness center access',
              'Choose your preferred dining time',
              'Pools, hot tubs, and sun decks',
              'Eric handles everything for you'
            ].map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'start'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: '#007298',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '0.125rem'
                }}>
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={{
                  fontSize: '1.125rem',
                  color: '#1F2937',
                  lineHeight: 1.5
                }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Join Section */}
      <div style={{
        background: 'linear-gradient(135deg, #007298 0%, #005a7a 100%)',
        color: 'white',
        padding: '4rem 1.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.3
        }}></div>
        
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            marginBottom: '2rem'
          }}>
            Why Join This Cruise?
          </h2>
          
          <div style={{
            fontSize: '1.25rem',
            lineHeight: 1.8,
            opacity: 0.95,
            marginBottom: '2rem'
          }}>
            <p style={{ margin: '0 0 1.5rem 0' }}>
              You don't have to figure this out alone. I handle all the details, from booking your cabin to making sure everything goes smoothly before, during, and after your trip.
            </p>
            <p style={{ margin: '0 0 1.5rem 0' }}>
              If something comes up, I take care of it. No stress. No confusion. Just a great vacation.
            </p>
            <p style={{ margin: 0 }}>
              This cruise is for anyone who wants to travel without the overwhelm. Friends, family, solo travelers, couples, everyone is welcome.
            </p>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.2)',
            marginTop: '2rem'
          }}>
            <p style={{
              margin: 0,
              fontSize: '1.125rem',
              fontWeight: 600
            }}>
              My planning service is always free. The cruise lines pay me, not you.
            </p>
          </div>
        </div>
      </div>

      {/* Booking Form Section */}
      <div id="booking-form" style={{
        background: '#F9FAFB',
        padding: '4rem 1.5rem'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            marginBottom: '1rem',
            color: '#007298',
            textAlign: 'center'
          }}>
            Ready to Join?
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#6B7280',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Fill out the form below and I'll get back to you within 24 hours with next steps.
          </p>

          {/* PLACEHOLDER FOR N8N FORM */}
          <div style={{
            background: 'white',
            padding: '3rem 2rem',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            border: '2px dashed #007298',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem'
            }}>📋</div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#1F2937',
              marginBottom: '1rem'
            }}>
              Form Embed Goes Here
            </h3>
            <p style={{
              fontSize: '1rem',
              color: '#6B7280',
              lineHeight: 1.6,
              marginBottom: '1.5rem'
            }}>
              Replace this placeholder with your n8n form embed code.<br/>
              The form should collect: name, email, phone, cabin preference, and any questions.
            </p>
            <div style={{
              background: '#F9FAFB',
              padding: '1rem',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '0.875rem',
              color: '#6B7280',
              textAlign: 'left',
              overflow: 'auto'
            }}>
              {`<!-- Paste your n8n form embed code here -->
<!-- Example: -->
<!-- <iframe src="YOUR_N8N_FORM_URL" width="100%" height="600" frameborder="0"></iframe> -->`}
            </div>
          </div>

          <div style={{
            marginTop: '2rem',
            textAlign: 'center',
            color: '#6B7280',
            fontSize: '0.95rem'
          }}>
            <p style={{ margin: '0 0 0.5rem 0' }}>
              Questions? Email me at <a href="mailto:eric@happydetour.com" style={{ color: '#007298', fontWeight: 600 }}>eric@happydetour.com</a>
            </p>
            <p style={{ margin: 0 }}>
              Or call/text: <a href="tel:3124602501" style={{ color: '#007298', fontWeight: 600 }}>312-460-2501</a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        background: '#F59E0B',
        color: 'white',
        padding: '2rem 1.5rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            marginBottom: '0.5rem',
            letterSpacing: '0.05em'
          }}>
            HAPPY DETOUR TRAVEL
          </div>
          <div style={{
            fontSize: '1rem',
            opacity: 0.95,
            marginBottom: '1rem'
          }}>
            Affordable vacations. Fun experiences. Everyone welcome.
          </div>
          <div style={{
            fontSize: '0.95rem',
            opacity: 0.9
          }}>
            @happydetourtravel
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveryoneWelcomeCruise;
