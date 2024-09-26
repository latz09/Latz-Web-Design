// app/automations/service-layout/layout.js
import PageContainer from '@/components/utils/animations/PageContainer';
import ServiceTabBar from '@/components/automations/ServiceTabBar';

const ServiceLayout = ({ children }) => {
  return (
    <div className="bg-light">
      <PageContainer>
        <ServiceTabBar />
        
          {children}
        <ServiceTabBar />
      </PageContainer>
    </div>
  );
};

export default ServiceLayout;
