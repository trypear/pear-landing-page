import Image from "next/image"
export default function Features() {
  return (
    <section className="flex flex-col">
      <div className="flex m-24 justify-between max-w-full" style={{height:"36.426rem"}}>
        <div className="flex flex-col justify-center content-evenly">
          <h1 className="text-4xl" style={{color:"#4CC9A7", fontWeight:"500"}} data-aos="fade-up" data-aos-delay="600">No more switching <br/> between files</h1>
          <br/>
          <div className="text-base" data-aos="fade-up" data-aos-delay="600">To add missing context: directly reference code by including other files in the chat by adding '@filename'. <br/><br/> This also works for folders, docs, terminal content, codebase, and more 😈 </div>
        </div>
        <Image src="https://s3-alpha-sig.figma.com/img/7f2c/7849/66cefeccfdadce253b814003bc6eb932?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lm~eIoDLovJFFV4BgGBdGGR2q62yBvTV0Bj7locbGT1ai5TrxHEl35ulH6~lnAEZi5im81i8z37vujv1W45ZU8iRAZKDBtdM8OkgMmeA4XZNKUMsy0aozeOQ84FhiylATOBGMfGtwJUxFbomtA4FZV7jTCc1v2NdvmoxAfTWHrMD8G-CMcB0i3sW-VassT7b~U6XIch12NzYEEoZ5y2OQJQmR4l3o3XumaYeOm7KuXhvujflKr-1G4ZcZMyx6B9~QjI0C2OLiSl8LQQilwE60lc2T6KLkgPptl27Gp2WG2ArT-8hCmk4E-vrwXT7RA~1bjNQtQz3eTukoNPIMifdEA__"
        width={873.48}
        height={582.82}
        alt=""
        className="rounded-lg"
        data-aos="fade-up" 
        data-aos-delay="600"/>
      </div>
      <div className="flex m-24 justify-between max-w-full" style={{height:"36.426rem"}}>
        <div className="flex flex-col justify-center content-evenly">
          <h1 className="text-4xl" style={{color:"#4CC9A7", fontWeight:"500"}} data-aos="fade-up" data-aos-delay="600">No more tedious changes,<br/>or forgetting language<br/>syntax</h1>
          <br/>
          <div className="text-base" data-aos="fade-up" data-aos-delay="600">Directly make changes inline by pressing CMD+I (ALT+L on Windows), and choose what you want to keep. <br/><br/> Here, we ask Pear to help us handl edge cases 😏</div>
        </div>
        <Image src="https://s3-alpha-sig.figma.com/img/9229/8c19/f69e8c788124e01751223a500df85aea?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nBte2jUC56Kr11M1WApQo-LQyYWAIYyxrmSVNyOgOZKMPAfN0Wem7dACcXkpI8T-ytGA~pA-CHwyZ9fxKAlD88kBI1ZAgFmDEDCsIhuBBOVYtc0XyPkC2S0R~yQAqgUUMUqG8Si34HvSDfq4N9x1vcZi3osCfpbPY7vFKJCze-E538Hw-7aA4wWAC1h-MLnPM0XvMZoFwPwBXB95ogiKaG8qGfFlSegAnupb2sqR2TmfLse6dG5jqk-dOpzUF3zbnH-9Q-nkJK9Fmdw~LHvj4z3wcpN75bWpNSgzyuXR3GXwJPxamvxs9Af9VNj8l2DCS~p4YLe-C1iouGrkV-h-yw__"
        width={873.48}
        height={582.82}
        alt=""
        className="rounded-lg"
        data-aos="fade-up"
        data-aos-delay="600"/>
      </div>
      <div className="flex m-24 justify-between max-w-full" style={{height:"36.426rem"}}>
        <div className="flex flex-col justify-center content-evenly">
          <h1 className="text-4xl" style={{color:"#4CC9A7", fontWeight:"500"}} data-aos="fade-up" data-aos-delay="600">No more tiresome <br/> copy pasting.</h1>
          <br/>
          <div className="text-base" data-aos="fade-up" data-aos-delay="600">Directly bring your code to the chat by selecting it and pressing CMD+L (ALT+L on Windows).<br/><br/> Prompt it right away 😎</div>
        </div>
        <Image src="https://s3-alpha-sig.figma.com/img/84e7/f5f7/d4fd2d4731a8b34bba6ea49aaa93fc2e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gTnsx4tuu8Abf3fDOvjyhZmriONDkCKc0FjEzJn~dJC48cXCi2n6oqXzWOjGCr20CQRbTH6S9yIn7Afgm7Sq~zvSGXLR6h7ZmD-ogBAX5HkO9XBANOefSWiRBCn~IvC5JlKFwMBiPvtw8abggElNFwfS4LdvSxA~k-QgEWhgrxg5irFkcQKGR-dUrehhTU-WDoKusPIjmyD09V4UBWcJ83c9FyllMi03ul-bpxnQYK2L-KPRavLpdWERCNfOaqbH-TjvdlrqR62-hOJ2dQIPMGQTDWDuYa9xEzny0muRItEIjO-xOA-2~d458wBaDlP6zp8azsGchmtEoqpSvZSwig__"
        width={873.48}
        height={582.82}
        alt=""
        className="rounded-lg"
        data-aos="fade-up" 
        data-aos-delay="600"/>
      </div>
    </section>
  )
}
