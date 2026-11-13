/**
 * Consistent section heading with an eyebrow label and optional intro.
 */
export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  id,
}) {
  return (
    <div className={`section-heading ${align === 'center' ? 'section-heading--center' : ''}`.trim()}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  )
}
