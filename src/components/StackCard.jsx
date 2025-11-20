import '../styles/Stacking.css'

export default function StackCard({ backgroundColor, topOffset, children, glide }) {

  return (
    <div className="stack-card" style={{ backgroundColor, top: `${topOffset}rem` }}>
      {children}
    </div>
  );
}