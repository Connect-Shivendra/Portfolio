import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Shivendra Singh — Head of Data, Information & AI'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0D1117',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          fontFamily: 'sans-serif',
          overflow: 'hidden',
        }}
      >
        {/* Top gold bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: '#C9A84C',
            display: 'flex',
          }}
        />

        {/* Decorative nested squares — right side, vertically centred */}
        <div
          style={{
            position: 'absolute',
            top: 215,
            right: 80,
            width: 200,
            height: 200,
            border: '1px solid rgba(201,168,76,0.18)',
            borderRadius: 6,
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 245,
            right: 110,
            width: 140,
            height: 140,
            border: '1px solid rgba(201,168,76,0.12)',
            borderRadius: 4,
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 275,
            right: 140,
            width: 80,
            height: 80,
            border: '1px solid rgba(201,168,76,0.10)',
            background: 'rgba(201,168,76,0.04)',
            borderRadius: 3,
            display: 'flex',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            padding: '50px 96px 0',
          }}
        >
          {/* SS monogram */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 64,
              height: 64,
              border: '2px solid #C9A84C',
              borderRadius: 10,
              color: '#C9A84C',
              fontSize: 26,
              fontWeight: 700,
              marginBottom: 32,
            }}
          >
            SS
          </div>

          {/* Role title */}
          <div
            style={{
              color: '#C9A84C',
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: 3,
              marginBottom: 18,
              display: 'flex',
            }}
          >
            HEAD OF DATA, INFORMATION & AI
          </div>

          {/* Name */}
          <div
            style={{
              color: '#F4F3F0',
              fontSize: 74,
              fontWeight: 800,
              lineHeight: 1,
              marginBottom: 28,
              display: 'flex',
            }}
          >
            Shivendra Singh
          </div>

          {/* Gold divider */}
          <div
            style={{
              width: 56,
              height: 3,
              background: '#C9A84C',
              borderRadius: 2,
              marginBottom: 28,
              display: 'flex',
            }}
          />

          {/* Tagline */}
          <div
            style={{
              color: '#8B8BA7',
              fontSize: 21,
              display: 'flex',
            }}
          >
            14+ Years in Data & AI Leadership · Sydney, Australia
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '22px 96px 36px',
            borderTop: '1px solid rgba(201,168,76,0.15)',
          }}
        >
          <div style={{ display: 'flex', gap: 10 }}>
            {['Data Strategy', 'AI Leadership', 'Architecture', 'Governance'].map((tag) => (
              <div
                key={tag}
                style={{
                  display: 'flex',
                  padding: '5px 16px',
                  borderRadius: 100,
                  border: '1px solid rgba(201,168,76,0.35)',
                  color: '#C9A84C',
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          <div
            style={{
              color: '#C9A84C',
              fontSize: 19,
              fontWeight: 600,
              display: 'flex',
            }}
          >
            shivendra.io
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
