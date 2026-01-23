import React from 'react';

const IMAGES = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDUYfCRmEj-wKoB2dEtUYvu86fG0jxf-ggsRF9_8OiQj2UipZ99uR8n6HtlJk2fMTGMWyFF8Tf2GreIL531EH4tLE5-pkU4_N2OT71e4s3t-2ZybIBB-WMf_DZrYVClmoAW0cFzsvyMzOG7tQ-HPr23mvRP41qaA-qGX4BHF-RZwSCa7SNds_hcfR4yanR0JPc8D58NaicpaKa-mwLCa67gJ7v43xrIiJi-G9YEvZHJFvVbc6GklATLz6eClAZGMY2rLV3qbc26Szpu',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD2e992Kt5dXpG5Fmtpjf04Za27DkLuKQhadawRAB1nULtsdpSUKtPHtAeXZ4MC_zQza1PCjfoJRMClgyI-RYYA6jWNqk4jaAFrQ9tZKD-DXqMc8C0yh_Tp3EgYs1UaPlR_YHnWVKye_iyVmP0myVXEshz_HGUjx4NDrso9ngZzcm-iOlnKIGsEV31Bd55sqoDd4WexeQwyBKntcfoneodtak5aiJYiHxf0bnzmAa5tZbCiV-V13mCyfI7kE9aE-JHp7mfDXEPgRiou',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDUHkkEudfUun5RSGGZIaOmSgHl_qqGWznl9CFnzUNUGaKbQy_pR-HbmfYf0G55YewNohIH_fK6M3g9bfdEar8XivAHBb1062BO3YAoV_GQRHdtpm-w97aPggTKX8Q67S1W1ALILUAzFEnA4hEi2LkvcBdcHr8I9QrMVKCblDlYyx9nHXmVxzFh1QQ10-HtbQNewRQY4opOnvjiWTC1RwDnZOV3eX-SJvKUIyyg3WTTpSEmfDgWSluA9NCugthf0v3xxHOZEEsvlsSB',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCQFsxLiclTSH5BFevX26ooxeLJ1pVdncrFyurSBdP4dbXXj7c0JJWCNYuHL_KVQcKe-QKucxhRdqJYvWKGDmIh8z_bcYrBUSY64tb4k4Kr7OVR0O_-BYypUpVHIjIWjno40sIpuE5HBPB6Hq33iIuQyNM63uLj_nDSlmbykA2seTp3ZWl9Yed0x0_7G0RoUDsfRr_l9_7qofdton3k57lSAACqVsPhvSnf9UOlcH6VtFvId46emsZovLoBx3-5xxALc9f7ERuGbYab',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDHP0czwre6TGhgpg2aoGjkoNuR5-5G12JfC2HZJKurVsigMTX-IhllTfmb-L_U9bVRiL0lA5v8Rt9_WWceaQ2lFkKZJEhcXMRGva5CYZ8Tuc8vydf_0JTHOm5Wbb3gX-V2SQehf2yy7UWVvDQdSoHttZ4WE1w8GIIB9eMJI4YBfVTjm0kru3ysbktGkzFh4gCzylZw1Mk08VIoZeodzR_1dwnnIcDy3Huqwoo6eQ_w5Wk1AONvU32pIThmqd44H7a6dpErD5Rdglhv',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDUYfCRmEj-wKoB2dEtUYvu86fG0jxf-ggsRF9_8OiQj2UipZ99uR8n6HtlJk2fMTGMWyFF8Tf2GreIL531EH4tLE5-pkU4_N2OT71e4s3t-2ZybIBB-WMf_DZrYVClmoAW0cFzsvyMzOG7tQ-HPr23mvRP41qaA-qGX4BHF-RZwSCa7SNds_hcfR4yanR0JPc8D58NaicpaKa-mwLCa67gJ7v43xrIiJi-G9YEvZHJFvVbc6GklATLz6eClAZGMY2rLV3qbc26Szpu',
];

export const InstagramFeed: React.FC = () => {
  return (
    <section className="w-full py-20 bg-white dark:bg-[#101922] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 text-center mb-12 flex flex-col items-center">
        <span className="inline-block p-3 rounded-full bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 mb-4 animate-bounce-slow">
          <span className="material-symbols-outlined text-3xl">photo_camera</span>
        </span>
        <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white mb-2">Follow Us on Instagram</h2>
        <a href="#" className="text-pink-600 dark:text-pink-400 font-bold hover:underline transition-colors text-lg">@GraceCommunity</a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto md:h-[280px]">
        {IMAGES.map((src, index) => (
          <div key={index} className="relative group aspect-square md:aspect-auto overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${src}')` }}
            ></div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-3xl">favorite</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};