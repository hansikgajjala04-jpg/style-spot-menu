const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Restaurant Website Created!</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Your HTML + CSS restaurant website has been created as separate files:
        </p>
        <div className="space-y-2 text-left max-w-md mx-auto">
          <p className="text-sm">📄 <strong>index.html</strong> - Complete restaurant website</p>
          <p className="text-sm">🎨 <strong>style.css</strong> - All styling and design</p>
        </div>
        <p className="text-sm text-muted-foreground mt-6">
          View the files in the code editor to see your pure HTML/CSS restaurant site!
        </p>
      </div>
    </div>
  );
};

export default Index;
