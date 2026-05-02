import React, { useState } from 'react';
import './Contact.css';
import contactBg from '../../assets/contact-bg.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'استفسار عن المشاريع السكنية',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Saudi phone numbers start with 05 (or +9665 or 5) and have 10 digits generally, simplified here to typical input.
  const isPhoneValid = (phone) => {
    const regex = /^(?:\+9665|05|5)\d{8}$/;
    return regex.test(phone.replace(/\s/g, ''));
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== '' &&
      isPhoneValid(formData.phone) &&
      formData.message.trim() !== ''
    );
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isFormValid()) return;
    
    setLoading(true);
    setStatus(null);

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyCQTD9EmBtAdolD1Ntq4n2BTa77ktlSrYgb95hwARLmMQ4qc8itRQZCxziLaLUjRJh1w/exec';

    try {
      const params = new URLSearchParams();
      
      params.append('name', formData.name.trim());
      params.append('phone', formData.phone.trim());
      params.append('email', formData.email.trim());
      params.append('subject', formData.subject); 
      params.append('message', formData.message.trim()); 

      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: params, 
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      setStatus('success');
      
      setFormData({ 
        name: '', 
        phone: '', 
        email: '', 
        subject: 'استفسار عن المشاريع السكنية', 
        message: '' 
      });

    } catch (error) {
      console.error("Error sending data:", error);
      setStatus('error');
    }

    setLoading(false);
  };
  return (
    <div className="contact-page-wrapper">
      {/* Contact Hero Area */}
      <div 
        className="contact-hero" 
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.85)'}}></div>
        <div className="container text-center text-white" style={{position: 'relative', zIndex: 1}}>
          <h1 className="contact-title-main">تواصل معنا</h1>
          <p className="contact-subtitle mt-3">نحن في وسائل النمو نسعد دائماً باستقبال استفساراتك وطلباتك</p>
        </div>
      </div>

      <div className="container contact-content-container">
        <div className="contact-grid ">
          
          {/* Contact Details (Dark side) */}
          <div className="contact-info-panel">
            <h3 className="info-title">معلومات الاتصال</h3>
            <p className="info-desc">فريق المبيعات والدعم الفني متاح للرد على أي استفسار يخص مشاريعنا العقارية وخدماتنا.</p>
            
            <div className="contact-info-list">
              <div className="info-item">
                <span className="info-icon whatsapp-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </span>
                <div className="info-details centered-details">
                  <div className="whatsapp-numbers-column">
                    <a href="https://wa.me/966542231128" target="_blank" rel="noreferrer" className="whatsapp-number-link">+966 54 223 1128</a>
                    <a href="https://wa.me/966542231128" target="_blank" rel="noreferrer" className="whatsapp-number-link">+966 54 223 1128</a>
                    <a href="https://wa.me/966542231128" target="_blank" rel="noreferrer" className="whatsapp-number-link">+966 54 223 1128</a>
                  </div>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <div className="info-details">
                  <span className="info-label">المقر الرئيسي</span>
                  <strong className="info-value">المملكة العربية السعودية، المدينة المنورة</strong>
                </div>
              </div>
            </div>


          </div>

          {/* Contact Form (Light side) */}
          <div className="contact-form-panel">
            <h3 className="form-header">أرسل لنا رسالة</h3>
            <p className="text-muted mb-4">قم بتعبئة النموذج وسنتواصل معك في أقرب وقت لإطلاعك على كافة التفاصيل المتاحة.</p>
            
            {status === 'success' && (
              <div className="alert alert-success mb-4" role="alert" style={{backgroundColor: '#e6f4ea', color: '#137333', padding: '15px', borderRadius: '8px', border: '1px solid #ceead6'}}>
                شكراً لتواصلك معنا! تم استلام رسالتك وسنقوم بالرد عليك في أقرب وقت.
              </div>
            )}

            {status === 'error' && (
              <div className="alert alert-danger mb-4" role="alert" style={{backgroundColor: '#fce8e6', color: '#c5221f', padding: '15px', borderRadius: '8px', border: '1px solid #fad2cf'}}>
                عذراً، حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <label className="custom-label">الاسم الكامل <span className="text-danger">*</span></label>
                <input required name="name" value={formData.name} onChange={handleChange} type="text" className="custom-input" placeholder="محمد عبدلله..." />
              </div>
              
              <div className="form-group mb-4">
                <label className="custom-label">رقم الجوال <span className="text-danger">*</span> {formData.phone && !isPhoneValid(formData.phone) && <span style={{color: 'red', fontSize: '12px', fontWeight: 'normal'}}>(رقم سعودي غير صحيح)</span>}</label>
                <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="custom-input" placeholder="05xxxxxxxx" dir="ltr" style={{ textAlign: 'right', borderColor: formData.phone && !isPhoneValid(formData.phone) ? 'red' : '' }} />
              </div>



              <div className="form-group mb-4">
                <label className="custom-label">موضوع الرسالة <span className="text-danger">*</span></label>
                <select required name="subject" value={formData.subject} onChange={handleChange} className="custom-input custom-select">
                  <option>استفسار عن المشاريع السكنية</option>
                  <option>طلب إدارة أملاك</option>
                  <option>خدمات التطوير العقاري</option>
                  <option>أخرى</option>
                </select>
              </div>
              
              <div className="form-group mb-4">
                <label className="custom-label">رسالتك المباشرة <span className="text-danger">*</span></label>
                <textarea required name="message" value={formData.message} onChange={handleChange} className="custom-textarea" rows="4" placeholder="كيف يمكننا مساعدتك؟"></textarea>
              </div>

              <button 
                type="submit" 
                className="custom-submit-btn w-100"
                disabled={!isFormValid() || loading}
                style={{ opacity: (!isFormValid() || loading) ? 0.6 : 1, cursor: (!isFormValid() || loading) ? 'not-allowed' : 'pointer'}}
              >
                {loading ? 'جاري الإرسال...' : 'إرسال الطلب الآن'}
                {!loading && <svg className="ms-2" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
