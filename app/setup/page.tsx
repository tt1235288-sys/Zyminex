'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONSTANTS } from '@/lib/seo';
import Image from 'next/image';
import { 
  MonitorSmartphone, Tv, Apple, Laptop, Sparkles, Lock, Zap, Users, 
  CheckCircle2, PlayCircle, ArrowRight, MessageCircle, Clock, Headphones, 
  Shield, Download, Mail, Cpu, Search, AlertCircle, TrendingUp, X, ChevronDown
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import Link from 'next/link';

const devices = [
  { id: 'firestick', name: 'Firestick / Android', icon: MonitorSmartphone, popular: true, steps: 6 },
  { id: 'smarttv', name: 'Smart TVs', icon: Tv, popular: false, steps: 6 },
  { id: 'apple', name: 'Apple Devices', icon: Apple, popular: false, steps: 6 },
  { id: 'pc', name: 'PC / Mac', icon: Laptop, popular: false, steps: 6 },
];

const stepData = {
  firestick: {
    title: 'Firestick & Android Box',
    icon: MonitorSmartphone,
    steps: [
      { 
        number: 1, 
        title: 'Create your account', 
        description: 'The setup journey begins when you create your account with us. Visit our pricing page, select your preferred subscription plan (3, 6, or 12 months), and complete the secure checkout process. After successful payment, you will receive an email within 1-2 minutes containing your unique login credentials including Username, Password, and Portal URL. Make sure to check your spam folder if you don\'t see it in your inbox.', 
        duration: '2-3 min', 
        icon: Users, 
        tip: 'Use a valid email address that you have access to, as all your account information and credentials will be sent there. Save the email for future reference.' 
      },
      { 
        number: 2, 
        title: 'Enable Unknown Sources', 
        description: 'From the Firestick home screen, navigate to Settings (gear icon) in the top right corner. Scroll to "My Fire TV" or "Device" depending on your version. Select "Developer Options". If you don\'t see Developer Options, go to "About" and click on the Fire TV Stick name 7 times to unlock it. Then turn ON "Apps from Unknown Sources" and also enable "ADB Debugging" if available. This allows installation of apps not found in the Amazon App Store.', 
        duration: '2 min', 
        icon: Shield, 
        tip: 'This setting is completely safe for our service and is required for installing third-party IPTV players. You can turn it off after setup if desired.' 
      },
      { 
        number: 3, 
        title: 'Install Downloader App', 
        description: 'On your Firestick home screen, click the search icon (magnifying glass) in the top left corner. Type "Downloader" using the on-screen keyboard. Select the Downloader app with the orange and white icon developed by AFTVnews. Click "Download" or "Get" to install the app. Once installed, click "Open" to launch Downloader. You may need to grant permission for Downloader to access files on your device - click "Allow".', 
        duration: '3 min', 
        icon: Download, 
        tip: 'Downloader is the official app used by millions to safely download applications. It is completely free and malware-free.' 
      },
      { 
        number: 4, 
        title: 'Enter Installation Code', 
        description: `Open the Downloader app. You will see a URL text field. Using your remote, carefully type the following code: 83492. Click "Go" or press the select button on your remote. The ${CONSTANTS.BRAND_NAME} app will begin downloading automatically. Once the download completes (usually 10-20 seconds), a popup will appear asking if you want to install the app. Click "Install". After installation, you can click "Open" or "Done".`, 
        duration: '2 min', 
        icon: MonitorSmartphone, 
        tip: 'Make sure you have a stable internet connection before entering the code. The download speed depends on your connection. If the code doesn\'t work, contact our support for the latest code.' 
      },
      { 
        number: 5, 
        title: 'Login with Credentials', 
        description: `Open the newly installed ${CONSTANTS.BRAND_NAME} app from your apps section. On the login screen, select "Login with Xtream Codes API" (not "Login with Playlist"). You will see three fields: Server URL / Portal URL, Username, and Password. Enter the information exactly as provided in your welcome email. The Portal URL usually starts with http:// or https://. After entering all details, click "Login" or "Add User". Wait 5-10 seconds for authentication.`, 
        duration: '3 min', 
        icon: Mail, 
        tip: 'Double-check that you\'re using Xtream Codes login method, not M3U playlist. Copy-paste credentials from your email to avoid typing errors. The login is case-sensitive.' 
      },
      { 
        number: 6, 
        title: 'Start streaming!', 
        description: 'Congratulations! Your device is now fully configured. You now have access to 15,000+ live channels including sports, news, entertainment, and international content. Explore 60,000+ movies and TV series in our VOD library. Use the Electronic Program Guide (EPG) to see what\'s playing now and next. You can favorite channels, use catch-up TV, and enjoy buffer-free 4K streaming. For best experience, use a wired ethernet connection or ensure your WiFi is strong (minimum 15 Mbps for HD, 30 Mbps for 4K).', 
        duration: 'Done!', 
        icon: PlayCircle, 
        tip: 'Explore all app features including search, favorites, parental controls, and external player options. Contact our 24/7 support if you need any assistance.' 
      },
    ]
  },
  smarttv: {
    title: 'Smart TV Setup',
    icon: Tv,
    steps: [
      { 
        number: 1, 
        title: 'Create your account', 
        description: 'Begin by creating your account on our website. Choose your subscription plan - we offer flexible options including 3 months, 6 months, and 12 months with significant discounts on longer plans. Complete payment using credit card, PayPal, or cryptocurrency. After successful payment, check your email for login credentials including Username, Password, and Portal URL. This email arrives within minutes and contains everything you need to start streaming.', 
        duration: '2-3 min', 
        icon: Users, 
        tip: 'Save your welcome email or take a screenshot of your credentials. You may need them if you ever reinstall the app or set up on another device.' 
      },
      { 
        number: 2, 
        title: 'Open App Store', 
        description: 'On your Samsung, LG, Sony, or other Smart TV remote, press the Home or Smart Hub button. Navigate to the app store - on Samsung it\'s called "Samsung Apps" or "Smart Hub", on LG it\'s "LG Content Store", on Sony/Android TV it\'s "Google Play Store". Make sure your TV is connected to the internet via WiFi or ethernet cable before proceeding.', 
        duration: '1 min', 
        icon: MonitorSmartphone, 
        tip: 'If you have an Android TV (Sony, Philips, TCL, Hisense), you can also use the Google Play Store on your phone to remotely install apps on your TV.' 
      },
      { 
        number: 3, 
        title: 'Search for IPTV Player', 
        description: 'Using the search function in your TV\'s app store, type "IPTV Smarters Pro" or "IBO Player". Both are excellent, user-friendly IPTV players that work perfectly with our service. IPTV Smarters Pro is free and widely used, while IBO Player offers a premium interface with a small one-time fee. Choose the one that best suits your preferences. Avoid unknown or suspicious apps.', 
        duration: '2 min', 
        icon: Search, 
        tip: 'We officially recommend IPTV Smarters Pro as it is free, regularly updated, and has all the features you need including EPG, catch-up, and multi-screen support.' 
      },
      { 
        number: 4, 
        title: 'Install the App', 
        description: 'Click "Install" or "Download" to begin installation. The download may take 1-3 minutes depending on your internet speed. Once installation is complete, you will see an "Open" button. You may also find the app icon on your TV\'s home screen or apps section. Do not open the app yet - proceed to the next step for login instructions.', 
        duration: '3 min', 
        icon: Download, 
        tip: 'If you encounter "insufficient storage" error, delete unused apps or clear cache in settings to free up space.' 
      },
      { 
        number: 5, 
        title: 'Login with Credentials', 
        description: `Open the installed IPTV player app. On the first screen, you will see different login options. Select "Login with Xtream Codes API" (this is the recommended method). You will need three pieces of information: Portal URL (sometimes called Server URL), Username, and Password. These were sent to your email after purchase. Enter each carefully - the Portal URL usually starts with http:// or https://. After entering, click "Add User" or "Login". The app will validate your credentials and load the channel list.`, 
        duration: '3 min', 
        icon: Mail, 
        tip: 'If login fails, check that you selected Xtream Codes method (not M3U). Verify there are no extra spaces before or after your credentials. The Portal URL must be exact.' 
      },
      { 
        number: 6, 
        title: 'Start streaming!', 
        description: 'Congratulations! Your Smart TV is now ready to stream premium content. Explore 15,000+ live channels organized by category: Sports (ESPN, Sky Sports, DAZN), News (CNN, BBC), Entertainment (HBO, Showtime), Kids, International, and more. Access 60,000+ movies and series in the VOD section. Use the Electronic Program Guide (EPG) to see schedule information. Enjoy 4K, FHD, and HD quality streaming with our anti-freeze technology.', 
        duration: 'Done!', 
        icon: PlayCircle, 
        tip: 'Take time to explore the app settings - you can adjust video player, buffer size, and enable hardware acceleration for smoother playback.' 
      },
    ]
  },
  apple: {
    title: 'Apple Devices',
    icon: Apple,
    steps: [
      { 
        number: 1, 
        title: 'Create your account', 
        description: 'Start by signing up for our service. Visit our pricing page and select your ideal plan - 1 Device, 2 Devices, or 3 Devices tier. Complete payment using your credit card, PayPal, or cryptocurrency. Within minutes, you will receive an email containing your exclusive login credentials including Username, Password, and Portal URL. These are required for the next steps.', 
        duration: '2-3 min', 
        icon: Users, 
        tip: 'Our tiered options offer the best value with savings on longer multi-device configurations plus VIP support and secure routing.' 
      },
      { 
        number: 2, 
        title: 'Open App Store', 
        description: 'On your iPhone, iPad, or Apple TV, locate and tap the blue "App Store" icon. Make sure you are signed in with your Apple ID. If not, go to Settings > [Your Name] > Media & Purchases and sign in. A valid Apple ID is required to download apps from the store. Ensure you have a stable internet connection via WiFi or cellular.', 
        duration: '1 min', 
        icon: MonitorSmartphone, 
        tip: 'Use the same Apple ID across all your Apple devices so you can download purchased apps on iPhone, iPad, and Apple TV without paying again.' 
      },
      { 
        number: 3, 
        title: 'Search for IPTV App', 
        description: 'Tap the Search tab at the bottom of the App Store. Type "IPTV Smarters Pro" or "Flex IPTV" into the search bar. IPTV Smarters Pro is completely free and highly recommended for beginners. Flex IPTV is also excellent with a clean interface and supports multiple playlists. Both apps are safe, regularly updated, and compatible with our service. Select the app you prefer.', 
        duration: '1 min', 
        icon: Search, 
        tip: 'Avoid paid IPTV apps that make unrealistic promises. Free apps like IPTV Smarters Pro offer all the features you need.' 
      },
      { 
        number: 4, 
        title: 'Download & Install', 
        description: 'Tap the "Get" button next to the app name. You may be prompted to authenticate using Face ID, Touch ID, or your Apple ID password. The download will begin automatically. Once complete, the button will change to "Open". You can also find the app on your home screen. Do not open yet - we will configure it in the next step.', 
        duration: '2 min', 
        icon: Download, 
        tip: 'If you see a cloud icon with an arrow instead of "Get", you have downloaded this app before. Tap it to reinstall.' 
      },
      { 
        number: 5, 
        title: 'Login with Credentials', 
        description: `Open the installed IPTV app. You will see a login screen with multiple options. Select "Login with Xtream Codes API" - this is the most reliable method. You will need three fields: Portal URL (Server URL), Username, and Password. Enter the exact credentials from your welcome email. The Portal URL typically starts with http:// or https://. After entering all three, tap "Login" or "Add User". Wait a few seconds for the channel list to load.`, 
        duration: '3 min', 
        icon: Mail, 
        tip: 'On Apple devices, you can use the copy-paste feature for credentials. Long-press on the text field to bring up the paste option.' 
      },
      { 
        number: 6, 
        title: 'Start streaming!', 
        description: 'Your Apple device is now fully configured! Enjoy instant access to 15,000+ live channels from around the world including premium sports, breaking news, entertainment, and international content. Browse 60,000+ movies and TV series sorted by genre, year, and popularity. The app supports AirPlay and Chromecast, so you can stream to your big screen TV. Picture-in-Picture mode lets you watch while using other apps.', 
        duration: 'Done!', 
        icon: PlayCircle, 
        tip: 'Enable external player in app settings to use VLC or other players for better format support and subtitle options.' 
      },
    ]
  },
  pc: {
    title: 'PC & Mac',
    icon: Laptop,
    steps: [
      { 
        number: 1, 
        title: 'Create your account', 
        description: 'Begin by signing up for our IPTV service. Visit our pricing page and select your ideal subscription tier - we offer 3-month, 6-month, and 12-month multi-device parameters. The 12-month tier provides the best overall value. Complete payment through our secure checkout. After successful payment, check your email for your login credentials including Username, Password, and Portal URL or M3U URL.', 
        duration: '2-3 min', 
        icon: Users, 
        tip: 'Save your M3U URL if provided - this is a direct link to your playlist that works with many desktop players including VLC.' 
      },
      { 
        number: 2, 
        title: 'Download IPTV Player', 
        description: 'For Windows or Mac, we recommend downloading VLC Media Player (completely free and open-source) or IPTV Smarters Pro for desktop. VLC is lightweight, powerful, and supports M3U playlists directly. To download VLC, visit videolan.org and click the download button for your operating system. IPTV Smarters Pro can be downloaded from their official website. Both players work perfectly with our service.', 
        duration: '3 min', 
        icon: Download, 
        tip: 'VLC Media Player is installed on millions of computers worldwide and is known for playing any video format without additional codecs.' 
      },
      { 
        number: 3, 
        title: 'Install the Application', 
        description: 'Once downloaded, locate the installer file in your Downloads folder. Double-click to run the installer. For VLC, simply follow the installation wizard - click "Next", "Install", and then "Finish". The default installation settings work perfectly. You may be prompted to allow the app to make changes to your device - click "Yes". After installation, you will find VLC in your Start Menu (Windows) or Applications folder (Mac).', 
        duration: '2 min', 
        icon: Cpu, 
        tip: 'During VLC installation, you can uncheck "Add VLC to context menu" if you prefer a cleaner right-click menu.' 
      },
      { 
        number: 4, 
        title: 'Get Your M3U Link', 
        description: `Check your welcome email from ${CONSTANTS.BRAND_NAME}. You will find either an M3U URL or Xtream Codes (Portal URL, Username, Password). For VLC, you will use the M3U URL. Copy the entire M3U URL - you can highlight it and press Ctrl+C (Windows) or Cmd+C (Mac). Keep this URL handy for the next step.`, 
        duration: '1 min', 
        icon: Mail, 
        tip: 'The M3U URL contains your personal credentials - do not share it with anyone. Keep it secure.' 
      },
      { 
        number: 5, 
        title: 'Load Your Playlist', 
        description: 'Open VLC Media Player. In the top menu, click "Media" then "Open Network Stream" (or press Ctrl+N on Windows / Cmd+N on Mac). A dialog box will appear. Paste the M3U URL you copied from your email into the network URL field by pressing Ctrl+V or Cmd+V. Click "Play" at the bottom. VLC will load your playlist which may take 10-30 seconds depending on your internet speed. Once loaded, you will see a playlist on the left side with all your channels organized by category.', 
        duration: '3 min', 
        icon: PlayCircle, 
        tip: 'To save your playlist permanently in VLC, go to View > Playlist, then right-click on the playlist name and select "Save". This way you won\'t need to paste the URL each time.' 
      },
      { 
        number: 6, 
        title: 'Start streaming!', 
        description: 'Congratulations! Your computer is now ready to stream premium IPTV content. Browse through thousands of channels organized by category: Live Sports, Breaking News, Prime Entertainment, Kids, International (channels from 100+ countries). Access 60,000+ movies and series in the VOD section. For the best experience, use a wired ethernet connection or ensure your WiFi is strong.', 
        duration: 'Done!', 
        icon: TrendingUp, 
        tip: 'Use VLC\'s hotkeys: F for fullscreen, Space for play/pause, Ctrl+Up/Down for volume, and Ctrl+Left/Right for seeking.' 
      },
    ]
  }
};

const setupFaqs = [
  {
    q: "How long does activation take after purchase?",
    a: "Our provisioning servers initiate configurations instantly. Your unique installation parameters, Portal URL, and Xtream API tokens arrive via email within 1 to 2 minutes after successful invoice completion."
  },
  {
    q: "Can I use my configuration credentials on multiple devices?",
    a: "You can download and install our setups on unlimited hardware panels. However, simultaneous media network lines depend strictly on your plan tier allowance. Our fixed architecture maps out distinct 1, 2, or 3 device configurations."
  },
  {
    q: "What should I do if my Xtream credentials throw a login error?",
    a: "First, verify that your interface is configured to use the Xtream Codes API mode rather than standard M3U line inputs. Ensure there are no trailing blank spaces before or after the password strings, as layout character processing is strictly case-sensitive."
  },
  {
    q: "Do I need a VPN to route my IPTV streaming streams safely?",
    a: "No, our enterprise architecture incorporates secure global routing networks natively. However, if your regional ISP executes performance throttling on streaming media data, activating a local proxy layer can bypass those parameters."
  },
  {
    q: "What minimum internet speed is required for 4K IPTV buffers?",
    a: "For uncompressed 4K Ultra HD video streams, we recommend a stable internet connection download threshold of at least 30 Mbps. Standard high-definition 1080p rendering requires a minimum threshold of 15 Mbps."
  },
  {
    q: "Can I watch live major sports PPV events with these setups?",
    a: "Yes, all premium global Pay-Per-View live sports events, including football tournaments, UFC matches, boxing blocks, and motorsport races, are completely embedded inside your streaming directory indices with no extra costs."
  },
  {
    q: "How do I update the Electronic Program Guide channels layout?",
    a: "Our EPG system syncs cache profiles automatically over our platform database. If your layout elements fall out of sync or show blank blocks, simply navigate to your player settings menu and select 'Refresh EPG Data Sources' to force synchronization."
  }
];

function StepItem({ step, index, isLast }: { step: any; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = step.icon;

  return (
    <div ref={ref} className="relative">
      <div className="flex gap-5 md:gap-6">
        
        <div className="flex flex-col items-center">
          <motion.div 
            className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${
              isInView 
                ? 'bg-[#3CAFFF] shadow-[0_0_30px_rgba(60,175,255,0.4)] scale-110' 
                : 'bg-[#3CAFFF]/20'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.4, type: 'spring', delay: index * 0.1 }}
          >
            <span className={`text-2xl md:text-3xl font-black transition-all duration-300 ${
              isInView ? 'text-[#fff1d0]' : 'text-[#3CAFFF]'
            }`}>
              {step.number}
            </span>
          </motion.div>
          
          {!isLast && (
            <motion.div 
              className="relative w-1 h-28 md:h-36 my-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: index * 0.15 + 0.3 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle,_#3CAFFF_1px,_transparent_1px)] bg-[length:4px_8px] bg-repeat-y opacity-20" />
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#3CAFFF] to-[#fdc500]"
                initial={{ height: 0 }}
                animate={{ height: isInView ? '100%' : 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
              />
              {isInView && (
                <motion.div 
                  className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-[#3CAFFF] rounded-full shadow-[0_0_15px_rgba(60,175,255,0.5)]"
                  initial={{ top: 0 }}
                  animate={{ top: '100%' }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.4, ease: "easeOut" }}
                />
              )}
            </motion.div>
          )}
        </div>
        
        <motion.div 
          className="flex-1 pb-16 md:pb-20"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -40 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className={`bg-[#fff1d0] border-4 rounded-2xl p-6 md:p-8 transition-all duration-500 ${
            isInView 
              ? 'border-[#3CAFFF] shadow-[0_0_40px_rgba(60,175,255,0.15)]' 
              : 'border-white/5'
          }`}>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isInView ? 'bg-[#3CAFFF]/20' : 'bg-black/5'
                }`}>
                  <Icon className={`w-5 h-5 transition-all duration-300 ${
                    isInView ? 'text-[#3CAFFF]' : 'text-[#003554]/40'
                  }`} />
                </div>
                <p className={`text-xl md:text-2xl font-black uppercase tracking-tight transition-colors duration-300 ${
                  isInView ? 'text-[#3CAFFF]' : 'text-[#003554]'
                }`}>
                  {step.title}
                </p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5">
                <Clock className="w-3.5 h-3.5 text-[#3CAFFF]" />
                <span className="text-[#003554]/60 text-xs font-bold">{step.duration}</span>
              </div>
            </div>
            
            <p className="text-[#003554]/80 font-medium leading-relaxed text-sm md:text-base">
              {step.description}
            </p>
            
            {isInView && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 p-4 rounded-xl bg-[#000000]/5 border border-[#3CAFFF]/20"
              >
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-lg bg-[#3CAFFF]/20 flex items-center justify-center">
                      <AlertCircle className="w-4 h-4 text-[#3CAFFF]" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[#3CAFFF] font-black text-sm uppercase tracking-wide">Pro Tip</p>
                    <p className="text-[#003554]/70 text-sm font-medium mt-0.5">{step.tip}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function SetupPage() {
  const [activeDevice, setActiveDevice] = useState('firestick');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [openFaqIndex, setOpenIndex] = useState<number | null>(0);
  const currentData = stepData[activeDevice as keyof typeof stepData];
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoOpen(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const closeVideo = () => {
    setIsVideoOpen(false);
    if (iframeRef.current) {
      iframeRef.current.src = '';
    }
  };

  const openVideo = () => {
    setIsVideoOpen(true);
    setTimeout(() => {
      if (iframeRef.current) {
        iframeRef.current.src = 'https://www.youtube.com/embed/9pZOoS-1NHg?autoplay=1&rel=0';
      }
    }, 100);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#003554]">
      
      {/* Hero Section */}
      <section className="relative pt-15 min-h-screen flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-1.webp"
            alt={`${CONSTANTS.BRAND_NAME} device setup guide - Easy Installation Tutorial`}
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover brightness-[0.2]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-[#003554]/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003554] via-transparent to-[#00355400]" />
        </div>
        
        <div 
          className="absolute inset-0 z-0 opacity-5"
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #3CAFFF 1px, transparent 1px),
              linear-gradient(to bottom, #3CAFFF 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3CAFFF]/10 blur-[150px] rounded-full pointer-events-none z-0" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <FadeInStagger className="flex flex-col items-center justify-center text-center">
            <FadeInItem>
              <div className="inline-flex items-center gap-2 bg-[#3CAFFF] px-4 py-2 rounded-full mb-6 shadow-md">
                <Sparkles className="w-4 h-4 text-[#fff1d0]" />
                <span className="text-[#fff1d0] font-black text-xs uppercase tracking-widest">Easy Setup Guide</span>
              </div>
            </FadeInItem>
            <FadeInItem>
              <h1 className="text-5xl md:text-7xl font-black text-[#fff1d0] tracking-tighter uppercase mb-6 leading-none text-center">
                IPTV Device Setup & <br />
                <span className="text-[#3CAFFF]">Installation Guide</span>
              </h1>
            </FadeInItem>
            <FadeInItem>
              <p className="text-lg md:text-xl text-[#fff1d0]/80 font-bold max-w-2xl mx-auto leading-relaxed px-2 text-center">
                Follow our step-by-step IPTV device setup and installation guide to activate {CONSTANTS.BRAND_NAME} on Firestick, Smart TV, Android, iOS, Apple TV, PC, and Mac in under 5 minutes on {CONSTANTS.DOMAIN}.
              </p>
            </FadeInItem>
            <FadeInItem>
              <div className="flex flex-wrap justify-center gap-6 mt-10 text-[#fff1d0]/50 text-xs md:text-sm font-black uppercase tracking-widest">
                <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-[#3CAFFF]" /> Secure Setup</span>
                <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#3CAFFF]" /> 5-Minute Setup</span>
                <span className="flex items-center gap-2"><Headphones className="w-4 h-4 text-[#3CAFFF]" /> 24/7 support</span>
                <span className="flex items-center gap-2"><Users className="w-4 h-4 text-[#3CAFFF]" /> 20,000+ Users</span>
              </div>
            </FadeInItem>
            
            <FadeInItem className="mt-12 relative flex justify-center">
              <button 
                onClick={openVideo}
                className="inline-flex items-center justify-center p-2 rounded-full bg-[#fff1d0]/10 border border-[#fff1d0]/20 hover:border-[#3CAFFF]/60 transition-all duration-300 relative z-10 shadow-inner group"
                aria-label="Watch setup video tutorial"
              >
                <div className="flex items-center gap-4 bg-[#fff1d0]/5 px-8 py-5 rounded-full border border-[#fff1d0]/10 hover:bg-[#fff1d0]/10 transition-colors">
                  <PlayCircle className="w-10 h-10 text-[#3CAFFF] shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <p className="text-[#fff1d0] font-black uppercase tracking-widest text-sm md:text-base">Setup Video Tutorial</p>
                    <p className="text-[#fff1d0]/60 text-xs font-bold uppercase tracking-wide mt-0.5">Visual installation guide</p>
                  </div>
                </div>
              </button>
              <div className="absolute inset-0 rounded-full bg-[#3CAFFF]/15 animate-pulse blur-md scale-110 pointer-events-none" />
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* HIGH-CTR CENTRALIZED CALL-TO-ACTION BANNER */}
      <section className="w-full bg-gradient-to-r from-[#3CAFFF] via-[#003554] to-[#3CAFFF] py-10 px-4 sm:px-6 border-y-4 border-[#fff1d0]/20 shadow-[0_0_50px_rgba(60,175,255,0.4)] relative z-20 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-10 gap-5">
          <div className="relative inline-block">
            <div className="bg-[#fff1d0] text-[#3CAFFF] font-black text-xs px-5 py-2 rounded-full uppercase tracking-widest shadow-md animate-bounce">
              RECOMMENDED
            </div>
            <div className="absolute inset-0 rounded-full bg-[#fff1d0]/30 animate-ping opacity-75 pointer-events-none" />
          </div>
          <p className="text-[#fff1d0] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none drop-shadow-md max-w-2xl">
            BOOST YOUR EXPERIENCE<br/>BUY PREMIUM IPTV FROM US!
          </p>
          <p className="text-[#fff1d0]/90 text-sm sm:text-base md:text-lg font-bold max-w-xl leading-relaxed">
            We rank among top IPTV Providers. Get stable, buffering-free 4K streaming access loaded instantly on {CONSTANTS.BRAND_NAME}.
          </p>
          <div className="w-full sm:w-auto mt-2">
            <Link
              href="/pricing"
              aria-label="Buy IPTV subscription now"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#fff1d0] text-[#003554] hover:bg-[#003554] hover:text-[#fff1d0] hover:scale-105 hover:shadow-[0_0_30px_rgba(241,232,219,0.5)] transition-all duration-300 px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl relative group/btn animate-pulse"
            >
              <span>Buy IPTV Now</span>
              <ArrowRight className="w-5 h-5 text-[#3CAFFF] group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Device Selection Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#003554]">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#fff1d0] mb-4 uppercase tracking-tighter leading-none">
            Choose Your <span className="text-[#3CAFFF]">Device</span>
          </h2>
          <p className="text-[#fff1d0]/70 text-lg font-bold max-w-2xl mx-auto mt-4">
            Select your platform below for step-by-step active installation instructions.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {devices.map((device) => {
            const Icon = device.icon;
            const isActive = activeDevice === device.id;
            return (
              <button
                key={device.id}
                onClick={() => setActiveDevice(device.id)}
                className={`relative p-6 rounded-3xl text-center transition-all duration-300 cursor-pointer group ${
                  isActive 
                    ? 'bg-[#fff1d0] text-[#003554] border-2 border-[#3CAFFF] shadow-2xl scale-[1.02]' 
                    : 'bg-[#fff1d0] text-[#003554] border-2 border-transparent hover:border-[#3CAFFF]/40'
                }`}
              >
                {device.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fdc500] text-[#003554] font-black uppercase text-[10px] tracking-widest px-3 py-1 rounded-full whitespace-nowrap shadow-md">
                    Most Popular
                  </div>
                )}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors ${
                  isActive ? 'bg-[#003554] text-[#fff1d0]' : 'bg-black/5 text-[#3CAFFF]'
                }`}>
                  <Icon className="w-8 h-8 shrink-0" />
                </div>
                <p className="text-lg font-black uppercase tracking-wide mb-2 text-[#003554]">{device.name}</p>
                <p className={`text-xs font-bold ${isActive ? 'text-[#003554]/60' : 'text-[#003554]/40'}`}>{device.steps} easy steps</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Vertical Timeline Process Display */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#003554]">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3CAFFF] text-[#fff1d0] font-black uppercase text-xs tracking-widest mb-4 shadow-md">
            <currentData.icon className="w-4 h-4 text-[#fff1d0] shrink-0" />
            <span>{currentData.title}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#fff1d0] mb-4 uppercase tracking-tighter">
            6 Step Process
          </h2>
          <p className="text-[#fff1d0]/60 text-base font-bold uppercase tracking-widest mt-2">
            Each configuration layer comes to life as you scroll
          </p>
        </div>

        <div className="relative px-2">
          {currentData.steps.map((step, index) => (
            <StepItem 
              key={step.number}
              step={step}
              index={index}
              isLast={index === currentData.steps.length - 1}
            />
          ))}
        </div>

        {/* System Verification Metrics Card */}
        <motion.div 
          className="text-center mt-12 p-8 md:p-10 rounded-3xl bg-[#fff1d0] border-4 border-[#3CAFFF] shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <CheckCircle2 className="w-14 h-14 text-[#3CAFFF] mx-auto mb-4" />
          <p className="text-2xl md:text-3xl font-black text-[#003554] uppercase tracking-tight mb-3">Setup Complete!</p>
          <p className="text-[#3CAFFF] font-bold text-base max-w-md mx-auto mb-8">
            You have successfully configured your device. Start enjoying full uncompressed premium media playback streams instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto px-4">
            <Link
              href="/"
              aria-label="Return to Zyminex Homepage"
              className="w-full sm:w-auto text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#3CAFFF] text-[#fff1d0] font-black text-sm uppercase tracking-widest transition-transform hover:scale-105 shrink-0"
            >
              Go to Homepage
            </Link>
            <Link
              href="/pricing"
              aria-label="View Zyminex subscription pricing plans"
              className="w-full sm:w-auto text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#003554] text-[#fff1d0] font-black text-sm uppercase tracking-widest transition-transform hover:scale-105 border-2 border-[#3CAFFF] shrink-0"
            >
              View Plans
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Support Grid Section */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#003554]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-8 text-center transition-all duration-300 shadow-xl group">
            <div className="w-16 h-16 rounded-xl bg-[#3CAFFF]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#3CAFFF]/20 transition-colors">
              <PlayCircle className="w-8 h-8 text-[#3CAFFF]" />
            </div>
            <p className="text-xl font-black text-[#003554] mb-2 uppercase tracking-wide">Video Tutorial</p>
            <p className="text-[#3CAFFF] text-sm font-medium mb-5">Watch our step-by-step visual configuration sequence directly inside our interface player.</p>
            <button 
              onClick={openVideo}
              aria-label="Watch video installation tutorial"
              className="inline-flex items-center gap-2 text-[#3CAFFF] font-black uppercase text-xs tracking-widest hover:gap-3 transition-all cursor-pointer"
            >
              Watch Now <ArrowRight className="w-4 h-4 text-[#fdc500]" />
            </button>
          </div>

          <div className="bg-[#fff1d0] border-4 border-[#3CAFFF] rounded-3xl p-8 text-center transition-all duration-300 shadow-xl group">
            <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-green-500/20 transition-colors">
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-xl font-black text-[#003554] mb-2 uppercase tracking-wide">24/7 Live Support</p>
            <p className="text-[#3CAFFF] text-sm font-medium mb-5">Connect with our support engineering crew on WhatsApp for instant setup assistance.</p>
            <a 
              href="https://wa.me/447549589503?text=Hello%20Zyminex%2C%20I%20need%20help%20with%20setup"
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Contact Zyminex customer support on WhatsApp"
              className="inline-flex items-center gap-2 text-green-500 font-black uppercase text-xs tracking-widest hover:gap-3 transition-all cursor-pointer"
            >
              Chat on WhatsApp <ArrowRight className="w-4 h-4 text-green-500" />
            </a>
          </div>
        </div>
      </section>

      {/* Dedicated Setup Page FAQ Accordion Module */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#003554] relative" aria-label="Frequently Asked Questions about Device Setup">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-[#3CAFFF]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <FadeIn className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#3CAFFF] px-4 py-2 rounded-full mb-6 shadow-md">
            <span className="text-[#fff1d0] font-black text-xs uppercase tracking-widest">Setup FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#fff1d0] mb-6 uppercase tracking-tighter leading-none">
            Installation <span className="text-[#3CAFFF]">Assistance</span>
          </h2>
          <p className="text-[#fdc500] font-bold text-lg max-w-2xl mx-auto mt-4">
            Everything you need to know about setting up your account and installing player apps.
          </p>
        </FadeIn>
        
        <FadeInStagger className="space-y-4 relative z-10">
          {setupFaqs.map((faq, i) => (
            <FadeInItem key={i}>
              <button
                onClick={() => setOpenIndex(openFaqIndex === i ? null : i)}
                className={`w-full text-left bg-[#fff1d0] border-4 ${openFaqIndex === i ? 'border-[#3CAFFF]' : 'border-white/5'} rounded-2xl p-6 hover:border-[#3CAFFF]/60 transition-all duration-300 group`}
                aria-expanded={openFaqIndex === i}
              >
                <div className="flex justify-between items-center gap-4">
                  <span className={`text-lg md:text-xl font-black uppercase tracking-tight transition-colors ${openFaqIndex === i ? 'text-[#3CAFFF]' : 'text-[#003554] group-hover:text-[#3CAFFF]'} flex items-center gap-3`}>
                    <span className={`${openFaqIndex === i ? 'text-[#3CAFFF]' : 'text-[#003554]/30'} font-black text-2xl`}>Q.</span> 
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${openFaqIndex === i ? 'rotate-180 text-[#3CAFFF]' : 'text-[#003554]/30 group-hover:text-[#3CAFFF]/50'}`} />
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openFaqIndex === i ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-[#003554]/80 font-medium leading-relaxed pl-10 md:pl-12 border-l-4 border-[#3CAFFF] ml-2 py-2">
                    {faq.a}
                  </p>
                </div>
              </button>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeVideo();
            }
          }}
        >
          <div className="relative w-full max-w-4xl mx-4">
            <button 
              onClick={closeVideo}
              aria-label="Close setup video tutorial"
              className="absolute -top-12 right-0 text-[#fff1d0]/60 hover:text-[#3CAFFF] transition-colors cursor-pointer flex items-center gap-2 text-sm font-bold z-10 uppercase tracking-widest"
            >
              <X className="w-5 h-5 shrink-0" /> Close Video
            </button>
            
            <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#3CAFFF] bg-black">
              <iframe
                ref={iframeRef}
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/9pZOoS-1NHg?autoplay=1&rel=0&modestbranding=1"
                title="Zyminex Setup Guide - Complete Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}