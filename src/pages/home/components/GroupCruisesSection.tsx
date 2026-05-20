export default function GroupCruisesSection() {
    return (
        <section style={{ background: '#F9FAFB', padding: '4rem 1.5rem' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1F2937', marginBottom: '1rem' }}>Join Us on This Trip</h2>
                    <p style={{ fontSize: '1.1rem', color: '#6B7280', maxWidth: '600px', margin: '0 auto' }}>Group cruise departing soon. Book now or reach out with questions.</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    
                    {/* Carnival ABC Islands Card */}
                    <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transition: 'transform 0.3s', maxWidth: '420px', width: '100%' }}>
                        <img src="/Aruba.jpg" alt="Carnival ABC Islands Cruise" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.75rem' }}>
                            <div style={{ display: 'inline-block', background: '#FF6B35', color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '0.4rem 0.9rem', borderRadius: '100px', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Oct 10–18, 2026</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1F2937', marginBottom: '0.75rem' }}>ABC Islands</h3>
                            <p style={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>8 days aboard Carnival Horizon. Departing Miami, FL. Aruba, Bonaire, Curaçao. Pure Caribbean paradise.</p>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <span style={{ fontSize: '0.85rem', color: '#6B7280' }}>Starting at</span>
                                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FF6B35', display: 'block' }}>$644</span>
                                <span style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>per person, double occupancy</span>
                            </div>
                            <a href="/ABC" style={{ display: 'block', background: '#FF6B35', color: 'white', textAlign: 'center', padding: '0.9rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', transition: 'transform 0.2s' }}>See Full Details</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
