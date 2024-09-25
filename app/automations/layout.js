// app/automations/service-layout/layout.js
import PageContainer from '@/components/utils/animations/PageContainer';
import ServiceTabBar from '@/components/automations/ServiceTabBar';

const ServiceLayout = ({ children }) => {
  return (
    <div className="bg-light">
      <PageContainer>
        <ServiceTabBar />
        <div className="max-w-5xl mx-auto">
          {children} {/* This renders the specific content of the nested pages */}
        </div>
        <ServiceTabBar />
      </PageContainer>
    </div>
  );
};

export default ServiceLayout;
