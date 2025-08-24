import React, { useState } from 'react';
import { Preferences } from '@capacitor/preferences';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ border: '1px solid #e5e7eb', padding: 16, borderRadius: 12, marginBottom: 16 }}>
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      {children}
    </div>
  );
}

export default function App() {
  const [name, setName] = useState('D Rose Compliance');

  async function saveName() {
    await Preferences.set({ key: 'businessName', value: name });
    alert('Saved!');
  }

  async function loadName() {
    const { value } = await Preferences.get({ key: 'businessName' });
    if (value) setName(value);
    else alert('Nothing saved yet.');
  }

  function generatePdf() {
    const doc = new jsPDF();
    doc.text('D Rose Compliance — Sample Report', 14, 16);
    autoTable(doc, {
      startY: 24,
      head: [['Item', 'Status', 'Notes']],
      body: [
        ['Driver Files', 'OK', 'All up to date'],
        ['Drug & Alcohol', 'Pending', 'Random pool generation in progress'],
        ['Vehicle Inspections', 'OK', 'No issues found']
      ]
    });
    doc.save('compliance-sample.pdf');
  }

  return (
    <div style={{ maxWidth: 720, margin: '40px auto', padding: 16, fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginTop: 0 }}>D Rose Compliance ✅</h1>

      <Section title="Preferences demo (@capacitor/preferences)">
        <label style={{ display: 'block', marginBottom: 8 }}>
          Business Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your company name"
            style={{ display: 'block', marginTop: 6, padding: 8, width: '100%' }}
          />
        </label>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={saveName}>Save</button>
          <button onClick={loadName}>Load</button>
        </div>
      </Section>

      <Section title="PDF Export (jspdf + autotable)">
        <p>Click to generate a sample compliance PDF.</p>
        <button onClick={generatePdf}>Generate PDF</button>
      </Section>

      <Section title="Next steps">
        <ol>
          <li>npm install</li>
          <li>npm run dev</li>
          <li>npm run build</li>
          <li>npx cap sync</li>
          <li>npx cap open ios / android</li>
        </ol>
      </Section>
    </div>
  );
}
