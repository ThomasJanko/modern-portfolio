export function ThemeScript() {
  const script = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
