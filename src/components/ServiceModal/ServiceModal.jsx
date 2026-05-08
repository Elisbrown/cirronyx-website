import React, { useEffect, useState, useCallback } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import './ServiceModal.css';

/**
 * ServiceModal — Displays full details of a selected service.
 *
 * @param {Object} props
 * @param {Object|null} props.service - The service object from services.json
 * @param {React.ReactNode} props.iconNode - Pre-rendered icon component
 * @param {string} props.color - Background color for the header
 * @param {Function} props.onClose - Called when user closes the modal
 */
const ServiceModal = ({ service, iconNode, color, onClose }) => {
  const [visible, setVisible] = useState(false);

  // Animate in on mount
  useEffect(() => {
    if (service) {
      // Small delay to trigger CSS transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
      // Lock body scroll
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [service]);

  // Close with animation
  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(() => onClose(), 350);
  }, [onClose]);

  // Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleClose]);

  if (!service) return null;

  return (
    <div
      className={`service-modal-overlay ${visible ? 'service-modal-overlay--visible' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={service.title}
    >
      <div className="service-modal" style={{ background: color || '#004058' }}>
        {/* Header */}
        <div className="service-modal__header" style={{ background: color || '#004058' }}>
          <button
            className="service-modal__close"
            onClick={handleClose}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          <div className="service-modal__icon-wrap">
            {iconNode}
          </div>
          <div className="service-modal__tagline">{service.tagline}</div>
          <h2 className="service-modal__title">{service.title}</h2>
        </div>

        {/* Body */}
        <div className="service-modal__body">
          <p className="service-modal__description">{service.description}</p>

          <div className="service-modal__offerings-title">What We Deliver</div>
          <ul className="service-modal__offerings">
            {service.offerings.map((item, idx) => (
              <li key={idx} className="service-modal__offering-item">
                <CheckCircle className="service-modal__offering-icon" size={20} />
                <span className="service-modal__offering-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer CTA */}
        <div className="service-modal__footer">
          <a href="/contact" className="service-modal__cta">
            Get Started
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
