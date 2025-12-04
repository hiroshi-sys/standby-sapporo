import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Clock, ShieldCheck, User, CheckCircle2, XCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-widest font-serif">STANDBY SAPPORO</span>
            <span className="text-[10px] text-muted-foreground tracking-wider">なんもしない付き添い役</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#concept" className="hover:text-primary transition-colors">コンセプト</a>
            <a href="#profile" className="hover:text-primary transition-colors">プロフィール</a>
            <a href="#uses" className="hover:text-primary transition-colors">こんなときに</a>
            <a href="#price" className="hover:text-primary transition-colors">料金</a>
            <a href="#contact" className="hover:text-primary transition-colors">依頼</a>
          </nav>
          <Button asChild variant="default" size="sm" className="rounded-full px-6">
            <a href="#contact">依頼・お問い合わせ</a>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-bg.jpg" 
              alt="Quiet street in Sapporo" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/90" />
          </div>
          
          <div className="container relative z-10 text-center md:text-left md:flex md:items-end md:justify-between pb-20">
            <div className="max-w-2xl space-y-6">
              <p className="text-sm tracking-[0.3em] uppercase text-primary font-bold">Standby / Sapporo</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-foreground drop-shadow-sm">
                大きめの人が、<br />
                静かにスタンバイ<br />
                しているサービス。
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg bg-background/50 backdrop-blur-sm p-4 rounded-sm border border-border/50">
                42歳・がっちり体型の男性が、必要以上に動き回らず、
                そばに立ったり、一歩うしろを歩いたりするだけの付き添いサービスです。
              </p>
            </div>
          </div>
        </section>

        {/* Concept Section */}
        <section id="concept" className="py-24 bg-secondary/30">
          <div className="container max-w-4xl">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
              <h2 className="text-3xl font-serif font-bold border-l-4 border-primary pl-6 py-2">
                コンセプト
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  STANDBY SAPPORO は、自称<strong className="text-foreground font-medium">「なんもしない付き添い役」</strong>です。
                  介護サービスのように家事や手続きの代行をするわけでも、
                  ボディーガードのように危険な相手と向き合うわけでもありません。
                </p>
                <p>
                  こちらから場を仕切ったり、強く口をはさんだりすることは基本的にあまりしません。
                  そのかわり、体格のある人間がそばにいることそのものを、
                  <strong className="text-foreground font-medium">「余計なことを足さない安心材料」</strong>として切り分けています。
                </p>
                <div className="text-sm text-muted-foreground/80 bg-background p-4 rounded border border-border">
                  <p>※警備会社・ボディーガード・カウンセラーなどの専門職ではありません。</p>
                  <p>※法的な意味での警備業務や、有事対応そのものを目的としたご依頼はお受けしていません。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section id="profile" className="py-24">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square md:aspect-[4/5] bg-muted rounded-sm overflow-hidden order-2 md:order-1">
                <img 
                  src="/images/profile-placeholder.jpg" 
                  alt="Profile Silhouette" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                />
                <div className="absolute inset-0 border-2 border-background/20 m-4 rounded-sm" />
              </div>
              
              <div className="space-y-10 order-1 md:order-2">
                <h2 className="text-3xl font-serif font-bold">プロフィール</h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Age</span>
                      <p className="text-xl font-medium">42歳</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Gender</span>
                      <p className="text-xl font-medium">男性</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Physique</span>
                      <p className="text-xl font-medium">がっちりめ</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Location</span>
                      <p className="text-xl font-medium">札幌市周辺</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-serif font-bold">雰囲気</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      無理に盛り上げるタイプではなく、基本的にはおとなしいほうです。
                      話したいときには耳を傾け、静かにしていたいときには、ほとんどしゃべらずそばにいます。
                      「そこに立っている」「歩調を合わせて歩く」という役回りを意識しています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Uses Section */}
        <section id="uses" className="py-24 bg-secondary/30">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-center mb-16">こんなときに呼べます</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "人が多いイベント・ライブ・展示などに、一人で行きづらいときの同行",
                "病院・役所・銀行・店舗など、少し構えてしまう場所への付き添い",
                "待ち合わせ場所で人を待つあいだ、近くにいてほしいとき",
                "カフェやフードコートで、それぞれ作業や読書をしながら同じ席に座っていたいとき",
                "歩きながら、あるいはどこかに腰かけて、ゆるく話を聞いてほしいとき"
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <p className="text-foreground/90">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="inline-block bg-background px-6 py-3 rounded-full text-sm text-muted-foreground border border-border">
                明るく盛り上げるというより、「空気を乱さずに、そこにいる人」がほしい場面向けのサービスです。
              </p>
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section id="rules" className="py-24">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-serif font-bold flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  できること
                </h3>
                <ul className="space-y-4">
                  {[
                    "一緒に歩く・同じ空間にいる・近くに立つ／座る",
                    "軽めの雑談や、日常レベルの相談ごとの「聞き役」",
                    "会話少なめで、ほぼ黙って隣にいること",
                    "荷物を少し持つ・列に一緒に並ぶ程度の協力"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-serif font-bold flex items-center gap-3 text-destructive">
                  <XCircle className="w-6 h-6" />
                  お受けしていないこと
                </h3>
                <ul className="space-y-4">
                  {[
                    "暴力行為や、それに近い場面への同行・介入",
                    "相手を威圧するための「後ろに立つ人」役を前提とした依頼",
                    "違法・グレーゾーンの行為に関わる依頼",
                    "尾行・張り込み、不倫の証拠集めなどのトラブル前提の依頼",
                    "金銭トラブルに関わる依頼や、お金の貸し借りを前提とした依頼",
                    "性的な意図を前提にした依頼、身体への接触を求める依頼",
                    "自殺・自傷を前提としたご依頼"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive/40 mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-16 p-6 bg-muted/30 rounded-sm border border-border text-center max-w-3xl mx-auto">
              <p className="text-muted-foreground">
                「何かが起きそうな場」にあえて突っ込むより、
                一人だと少ししんどい場面で、“なんもしない付き添い役”くらいの距離感で呼んでいただけるとちょうどよいのではないでしょうか。
              </p>
            </div>
          </div>
        </section>

        {/* Price Section */}
        <section id="price" className="py-24 bg-primary/5">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-center mb-16">料金の目安</h2>
            
            <div className="bg-background rounded-lg shadow-sm border border-border p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
                <div className="text-center space-y-2 pt-4 md:pt-0">
                  <p className="text-sm text-muted-foreground font-bold tracking-wider uppercase">Basic</p>
                  <p className="text-3xl font-bold font-serif">2,000円<span className="text-sm font-sans font-normal text-muted-foreground"> / 1時間</span></p>
                  <p className="text-xs text-muted-foreground">（税込）</p>
                </div>
                <div className="text-center space-y-2 pt-8 md:pt-0">
                  <p className="text-sm text-muted-foreground font-bold tracking-wider uppercase">Minimum</p>
                  <p className="text-3xl font-bold font-serif">2時間〜</p>
                  <p className="text-xs text-muted-foreground">最低利用時間（4,000円〜）</p>
                </div>
                <div className="text-center space-y-2 pt-8 md:pt-0">
                  <p className="text-sm text-muted-foreground font-bold tracking-wider uppercase">Extension</p>
                  <p className="text-3xl font-bold font-serif">1,000円<span className="text-sm font-sans font-normal text-muted-foreground"> / 30分</span></p>
                  <p className="text-xs text-muted-foreground">延長料金</p>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              <div className="space-y-4 text-center">
                <div className="inline-flex items-center gap-2 text-foreground font-medium">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>交通費：自宅最寄り駅から待ち合わせ場所までの往復交通費（実費）</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground mt-4">
                  <p>※現在は9:00〜20:00の時間帯のみ対応しています。</p>
                  <p>※当日キャンセルや連絡なしキャンセルの場合、キャンセル料をお願いする場合があります。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flow Section */}
        <section id="flow" className="py-24">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-center mb-16">ご利用の流れ</h2>
            
            <div className="relative space-y-12 before:absolute before:inset-0 before:ml-6 md:before:ml-[50%] before:-translate-x-px before:h-full before:w-0.5 before:bg-border before:z-0">
              {[
                {
                  step: "01",
                  title: "メールでのご連絡",
                  desc: "希望日時・エリア・ざっくりした依頼内容を書いて送っていただきます。"
                },
                {
                  step: "02",
                  title: "内容の確認と可否の返信",
                  desc: "安全面や方針に合うかどうかを確認し、お受けできる場合は料金の目安・待ち合わせ場所などをお返事します。"
                },
                {
                  step: "03",
                  title: "当日合流",
                  desc: "人通りのある場所で待ち合わせし、簡単な挨拶のあと、一緒に行動を開始します。"
                },
                {
                  step: "04",
                  title: "終了・お支払い",
                  desc: "終了時に、その場で現金にてお支払いをお願いする予定です。"
                }
              ].map((item, i) => (
                <div key={i} className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 group">
                  <div className={`md:w-1/2 md:text-right md:pr-12 ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                    <div className={`bg-background p-6 rounded-lg border border-border shadow-sm group-hover:border-primary/50 transition-colors ${i % 2 !== 0 ? 'md:text-left' : ''}`}>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                  
                  <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-primary text-primary font-bold font-serif shadow-sm ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                    {item.step}
                  </div>
                  
                  <div className={`md:w-1/2 md:pl-12 ${i % 2 !== 0 ? 'md:order-3' : ''}`} />
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                ご家族が心配されている場合は、「どんな人とどこで会うか」を共有しておいていただいたほうが安心ではないでしょうか。
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-foreground text-background">
          <div className="container max-w-3xl text-center space-y-10">
            <h2 className="text-3xl font-serif font-bold text-background">依頼・お問い合わせ</h2>
            <p className="text-background/80 leading-relaxed">
              ご依頼・お問い合わせは、メールで受け付けています。<br />
              下のボタンから、必要事項を記入して送信してください。
            </p>
            
            <Button asChild size="lg" className="rounded-full px-10 py-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20">
              <a href="mailto:yourmail@example.com?subject=STANDBY%20SAPPORO%20への依頼&body=【お名前（呼び名）】%0D%0A【年代・性別】%0D%0A【希望日時】%0D%0A【希望エリア・待ち合わせ場所】%0D%0A【ご依頼内容（ざっくりで構いません）】%0D%0A【会話量のイメージ（少なめ／普通など）】%0D%0A">
                <Mail className="mr-2 w-5 h-5" />
                メールを送る
              </a>
            </Button>
            
            <div className="text-xs text-background/50 space-y-2 pt-8 border-t border-background/10 max-w-md mx-auto">
              <p>※yourmail@example.com の部分は、ご自身のメールアドレスに変更してご利用ください。</p>
              <p>※XやInstagramを併用する場合は、ここにアカウントへのリンクを追記できます。</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-background border-t border-border text-center text-sm text-muted-foreground">
        <div className="container">
          <p>&copy; 2025 STANDBY SAPPORO</p>
        </div>
      </footer>
    </div>
  );
}
