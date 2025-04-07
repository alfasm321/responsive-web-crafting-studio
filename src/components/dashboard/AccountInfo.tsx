
import React from 'react';

const AccountInfo: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm mb-6">
      <h3 className="text-sm font-medium text-gray-500 mb-4">ACCOUNT INFO</h3>
      <div className="space-y-3">
        <div className="flex items-start">
          <div className="text-gray-500 w-10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-700">G***** *****</p>
            <p className="text-xs text-gray-500">Sri Street 1207, Chennai</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="text-gray-500 w-10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm">Email: xxxxx@gmail.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="text-gray-500 w-10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm">Sec Email: g****234@gmail.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="text-gray-500 w-10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline">
              <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9983 21.4142 21.3734C21.0391 21.7485 20.5113 21.9591 19.96 21.9591C19.3991 21.9591 18.86 21.9591 18.34 21.9591C10.34 21.9591 3.36 14.9791 3.36 6.97908C3.36 6.45908 3.36 5.91908 3.36 5.35908C3.36 4.80783 3.57062 4.28001 3.94569 3.90493C4.32077 3.52986 4.84859 3.31924 5.39984 3.31924H8.39984C8.67312 3.31895 8.93818 3.40739 9.15078 3.56957C9.36338 3.73176 9.51059 3.95931 9.56984 4.21924L10.1698 6.90924C10.2239 7.14357 10.2006 7.38868 10.1038 7.60869C10.007 7.8287 9.8415 8.01096 9.62984 8.12924L7.81984 9.18924C9.06973 11.5499 11.0091 13.4893 13.3698 14.7391L14.4298 12.9291C14.5481 12.7175 14.7303 12.552 14.9503 12.4552C15.1704 12.3584 15.4155 12.3351 15.6498 12.3892L18.3398 12.9892C18.5998 13.0484 18.8273 13.1957 18.9895 13.4083C19.1517 13.6209 19.2401 13.8859 19.2398 14.1592V16.9192C19.2398 17.4705 19.0292 17.9983 18.6541 18.3734C18.279 18.7485 17.7512 18.9592 17.1998 18.9592C16.6398 18.9592 16.0998 18.9592 15.5798 18.9592C7.57984 18.9592 0.599844 12.0492 0.599844 4.04924C0.599844 3.52924 0.599844 2.98924 0.599844 2.42924C0.599844 1.87798 0.810465 1.35017 1.18554 0.975093C1.56062 0.600011 2.08844 0.389389 2.63969 0.389389H5.63968C5.91296 0.389099 6.17803 0.477541 6.39063 0.639726C6.60323 0.80191 6.75043 1.02947 6.80969 1.28939L7.40969 3.97939C7.46385 4.21372 7.44051 4.45883 7.34368 4.67884C7.24685 4.89885 7.08168 5.08112 6.87002 5.19939L5.06002 6.25939C6.30991 8.62006 8.24927 10.5594 10.61 11.8092L11.67 9.99924C11.7883 9.78758 11.9706 9.62242 12.1906 9.52559C12.4106 9.42876 12.6557 9.40542 12.89 9.45958L15.58 10.0596C15.8399 10.1188 16.0675 10.266 16.2297 10.4786C16.3919 10.6912 16.4802 10.9563 16.48 11.2296V14.0296C16.48 14.5809 16.2693 15.1087 15.8943 15.4838C15.5192 15.8589 14.9914 16.0695 14.44 16.0695C13.88 16.0695 13.34 16.0695 12.82 16.0695C4.82002 16.0695 -2.15896e-05 9.15953 -2.15896e-05 1.1595C-2.15896e-05 0.639496 -2.15896e-05 0.0994956 -2.15896e-05 -0.460504" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm">Phone: +91 ********</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
