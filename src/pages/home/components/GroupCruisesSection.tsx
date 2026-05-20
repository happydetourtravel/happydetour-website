export default function GroupCruisesSection() {
    return (
        <section style={{ background: '#F9FAFB', padding: '4rem 1.5rem' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1F2937', marginBottom: '1rem' }}>Join Us on These Trips</h2>
                    <p style={{ fontSize: '1.1rem', color: '#6B7280', maxWidth: '600px', margin: '0 auto' }}>Group cruises departing soon. Book now or reach out with questions.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', justifyContent: 'center' }}>

                    {/* Carnival ABC Islands Card */}
                    <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transition: 'transform 0.3s' }}>
                        <img src="/Aruba.jpg" alt="ABC Islands Cruise" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.75rem' }}>
                            <div style={{ display: 'inline-block', background: '#FF6B35', color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '0.4rem 0.9rem', borderRadius: '100px', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Oct 10–18, 2026</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1F2937', marginBottom: '0.75rem' }}>ABC Islands</h3>
                            <p style={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>8 days in the Caribbean. Departing Miami, FL. Aruba, Bonaire, Curaçao. Pure Caribbean paradise.</p>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <span style={{ fontSize: '0.85rem', color: '#6B7280' }}>Starting at</span>
                                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FF6B35', display: 'block' }}>$644</span>
                                <span style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>per person, double occupancy</span>
                            </div>
                            <a href="/abc" style={{ display: 'block', background: '#FF6B35', color: 'white', textAlign: 'center', padding: '0.9rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>See Full Details</a>
                        </div>
                    </div>

                    {/* Virgin Voyages Alaska Card */}
                    <div style={{ background: '#0A0F1E', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.2)', transition: 'transform 0.3s' }}>
                        <div style={{ width: '100%', height: '240px', background: 'linear-gradient(160deg, #050810 0%, #0A1628 40%, #1B3A5C 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(0,255,136,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(0,136,255,0.06) 0%, transparent 50%)' }}></div>
                            <span style={{ fontFamily: 'Georgia, serif', fontSize: '4rem', fontStyle: 'italic', color: 'rgba(200,223,240,0.9)', position: 'relative', zIndex: 1 }}>Alaska</span>
                        </div>
                        <div style={{ padding: '1.75rem' }}>
                            <div style={{ display: 'inline-block', background: '#C9A84C', color: '#0A0F1E', fontSize: '0.75rem', fontWeight: 700, padding: '0.4rem 0.9rem', borderRadius: '100px', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Jun 17–24, 2027</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', marginBottom: '0.75rem' }}>Alaska · Virgin Voyages</h3>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>7 nights aboard Brilliant Lady. Seattle to Seattle. Dining and WiFi included. Adults only.</p>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>Starting at</span>
                                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#C9A84C', display: 'block' }}>$1,797</span>
                                <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>per person, private balcony</span>
                            </div>
                            <a href="/alaska" style={{ display: 'block', background: 'linear-gradient(135deg, #C9A84C, #E8CC7A)', color: '#0A0F1E', textAlign: 'center', padding: '0.9rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>See Full Details</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
