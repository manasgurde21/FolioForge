
import React from 'react';
import { Template } from '../types';
import { Button } from './ui/Button';
import { FORMAL_FONTS } from '../constants';
import { Card } from './ui/Card';
import { Input } from './ui/Input';
import { Palette, Type, Image as ImageIcon, Layout } from 'lucide-react';

interface TemplateSelectorProps {
  templates: Template[];
  onSelect: (template: Template) => void;
}

export const TemplateSelector: React.FC<TemplateSelectorProps & { updateVisualConfig: any, visualConfig: any }> = ({ templates, onSelect, updateVisualConfig, visualConfig }) => {
  
  return (
    <div className="container py-5 animate-fade-in">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-dark mb-3">Craft Your Identity</h1>
        <p className="lead text-secondary mx-auto" style={{maxWidth: 600}}>
            Select a professionally designed template and customize the visual style to match your personal brand.
        </p>
      </div>
      
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10">
            <Card title="Design Studio" className="border-0 shadow-lg" headerAction={<div className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill"><Palette size={14} className="me-1" /> Customization</div>}>
                <div className="row g-4">
                    <div className="col-md-6">
                        <label className="form-label fw-bold d-flex align-items-center gap-2">
                            <Type size={16} className="text-primary"/> Typography
                        </label>
                        <select 
                            className="form-select" 
                            value={visualConfig.font} 
                            onChange={(e) => updateVisualConfig('font', e.target.value)}
                        >
                            {FORMAL_FONTS.map(f => <option key={f.value} value={f.value}>{f.name}</option>)}
                        </select>
                    </div>
                     <div className="col-md-6">
                        <label className="form-label fw-bold d-flex align-items-center gap-2">
                             <div className="rounded-circle" style={{width: 16, height: 16, background: visualConfig.themeColor}}></div>
                             Theme Color
                        </label>
                        <div className="d-flex align-items-center gap-2">
                            <input 
                                type="color" 
                                className="form-control form-control-color w-100" 
                                value={visualConfig.themeColor} 
                                onChange={(e) => updateVisualConfig('themeColor', e.target.value)} 
                                title="Choose your theme color"
                            />
                        </div>
                    </div>
                    <div className="col-12 border-top pt-3 mt-3">
                        <h6 className="fw-bold mb-3 d-flex align-items-center gap-2 text-dark"><ImageIcon size={16} className="text-primary"/> Imagery</h6>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <Input 
                                    label="Profile Photo URL" 
                                    value={visualConfig.profileImageUrl || ''} 
                                    onChange={(e) => updateVisualConfig('profileImageUrl', e.target.value)} 
                                    placeholder="https://..." 
                                />
                            </div>
                            <div className="col-md-6">
                                <Input 
                                    label="Background Image URL (Optional)" 
                                    value={visualConfig.backgroundImageUrl || ''} 
                                    onChange={(e) => updateVisualConfig('backgroundImageUrl', e.target.value)} 
                                    placeholder="https://..." 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between mb-4">
        <h3 className="fw-bold m-0 d-flex align-items-center gap-2"><Layout size={24} className="text-primary"/> Select Layout</h3>
        <span className="text-muted small">{templates.length} templates available</span>
      </div>

      <div className="row g-4 justify-content-center">
        {templates.map((template) => (
          <div key={template.id} className="col-md-6 col-lg-4">
            <div className="card h-100 template-card border-0 position-relative">
              <div className="overflow-hidden bg-light" style={{height: 240}}>
                <img src={template.previewImage} alt={template.name} className="card-img-top h-100 w-100" style={{objectFit: 'cover'}} />
              </div>
              <div className="card-body text-center p-4 bg-white">
                <h3 className="h5 fw-bold mb-1">{template.name}</h3>
                <p className="text-muted small mb-0">Optimized for {template.id === 'developer' ? 'Engineers' : template.id === 'designer' ? 'Creatives' : 'Professionals'}</p>
              </div>
              
              <div className="template-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-white p-4 text-center">
                 <h4 className="mb-2 fw-bold">{template.name}</h4>
                 <p className="small opacity-75 mb-4">Click to preview and apply this layout to your data.</p>
                 <Button variant="primary" onClick={() => onSelect(template)} className="rounded-pill px-4">
                    Use This Template
                 </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
