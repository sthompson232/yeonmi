import React, { useEffect, useRef } from 'react'
import { gsap, Power3 } from 'gsap'
import { useSelector } from "react-redux";

export const Story = ({ counter }) => {
    const scene1 = useRef()
    const scene2 = useRef()
    const scene3 = useRef()
    const scene4 = useRef()
    const scene5 = useRef()
    const scene6 = useRef()

    const duration = useSelector(state => state.duration)
    
    const come = {opacity: 1, display: 'block', duration: duration, ease: Power3.easeIn, delay: duration}
    const go = {opacity: 0, display: 'none', duration: duration, ease: Power3.easeOut}

    useEffect(() => {
        counter === 0 ? gsap.to(scene1.current, come) : gsap.to(scene1.current, go)
        counter === 1 ? gsap.to(scene2.current, come) : gsap.to(scene2.current, go)
        counter === 2 ? gsap.to(scene3.current, come) : gsap.to(scene3.current, go)
        counter === 3 ? gsap.to(scene4.current, come) : gsap.to(scene4.current, go)
        counter === 4 ? gsap.to(scene5.current, come) : gsap.to(scene5.current, go)
        counter === 5 ? gsap.to(scene6.current, come) : gsap.to(scene6.current, go)
    }, [counter])

    return (
        <div style={{ 
                padding: 20, 
                textAlign:'start',
                maxHeight: '32vh',
                overflowY: 'scroll',
            }}>
            <div ref={scene1}>
                <h1 className='scene-title'>North Korea</h1>
                <hr />
                <p>Yeonmi was born on the 4th October 1993, in Hyesan, North Korea. Her Mother was a nurse and her Father was a civil servant. Yeonmi was born a year before the North Korean famine of 1994-1998, a result of the collapse of the Soviet Union, which could no longer support the North Korean regime. Yeonmi would grow up with mass starvation all around her, with corpses on the streets. It is estimated that there were between 240,000 to 3.5 million deaths caused by the famine, which is also referred to as the Arduous March. People mostly died from hunger or infection in these years. Yeonmi and her family would survive these years by living on a diet of grasshoppers, dragonflies, and other insects. As well as tree bark, plants and flowers. Many North Koreans resorted to cannibalism to survive.</p>
                    
                <p>As well as suffering from the famine, Yeonmi, like many other North Koreans, grew up in absolute poverty. Yeonmi’s family were considered the lowest class, due to North Korea's ‘guilty by association’ policy. This policy condemns from 3 to 8 generations of a family, if a family member is found guilty of a crime. In Yeonmi’s family’s case, this was because her great grandfather was a landowner before the North Korean regime.</p>
                
                <p className='facts'>Regime gives lots of assignments. As a school child, asked to collect dog and human waste for fertilizer.</p>

            </div>
            <div ref={scene2}>
                <h1 className='scene-title'>Father</h1>
                <p>Yeonmi’s Father, Park Jin-sik would trade sugar, spices and metals on the black market – this is a highly illegal activity in North Korea. North Koreans are not allowed to have personal possessions as everything is considered to be owned by the state. (There is no private property in North Korea, capitalism and freetrade is viewed as corrupt and maleviolent by nature. Wearing jeans is seen as a symbol of capitalism and you will go to prison for this.)
                When Yeonmi was 8 years old, her Father was discovered trading, and sent to a prison camp with an 11 year sentence. In order to support the family, Yeonmi’s Mother would go away for months to work, in order to support Yeonmi and her older sister. ($1.90 a day is line between poverty by UN. North Koreans were making this in a month.)
                Yeonmi would later see her Father in the last few months of his life, 
                Yeonmi’s Father was sent to a prison camp, which involves unbearable labour. A lot of inmates die within the first three months there. In 2010, the UN did three year investigation and the only resemblance to these prison camps is the holocaust. 
                As well as prison camps, there are also Kwalliso camps. Inmates in these camps are not considered human, and many are born in these camps and spend their whole lives there as a result of group guilt by association. and is permanent, you will live there for your whole life. These camps are influenced by Stalinist and Maoist camps.
                (If you accidentally rip newspaper with kim on, your three generations will go to a concentration camp.) (If one high ranking official escapes, they kill 30,000 people.)
                </p>
            </div>
            <div ref={scene3}>
                <h1 className='scene-title'>China</h1>
                <p>In 2007, motivated by hunger and in search of a better life, Yeonmi and her Mother fled to China after Yeonmi’s sister had successfully crossed the border. Yeonmi had no idea what China was, and only knew it by the lights she could see across the border. (North Koreans do not know what the internet is, or have electricity, or even a map of the world). After bribing the guards to cross the border, these same guards raped Yeonmi’s Mother in front of her. Once Yeonmi and her mother reached China, they were then priced by their traffickers to be sold into slavery. North Korean defectors would end up being sold into slavery or prostitution. North Korean women were seen as more valuable then men, due to the lack of women in China as a result of the one child policy.  
                Yeonmi and her Mother were passed through many traffickers, and eventually separated at the age of 13. Yeonmi spent the next two years of her life with a violent and abusive Chinese trafficker. At this time Yeonmi was contemplating suicide, but was convinced not to by her trafficker, if he could find her Mother.Eventually the trafficker tracked down her Mother, and bought her back. 
                It was at this time that Yeonmi also saw her Father again. He was released 4 years into his sentence on sick leave due to his illness and escaped to China with the help of their trafficker. Yeonmi describes her Father returning an empty and broken man, who was convinced he didn’t do enough for his country. Until he died from his illness he felt guilty.( North Koreans are told that the Kims do not sleep, and work tirelessly for North Korea. When Kim-il -sungg died from a medical condition, not form hard work. Imitated the bible with kims being gods.) Yeonmi’s Father died of cancer. Yeonmi’s trafficker eventually lost all his money on gambling and could no longer afford to feed Yeonmi’s and her Mother, he eventually let them go. During this time, Yeonmi recognises that, although violent and abusive, this man showed kindness to Yeonmi and her family.  
                At the age of 13, Yeonmi would be forced to work in chatrooms as a way to earn money. Yeonmi then became associated with a group of Chinese Christians who offered to help Yeonmi get to South Korea for a better life, however she would need to prove her faith to them. Yeonmi underwent training, in this time she was made to fast and memorise bible verses. When the Christian group found out Yeonmi had been working in chatrooms to survive, the pastor said she was so dirty she could never be washed. Some sins can never be washed. Although  Christians risked their lives to get them to SK.
                There are estimated to be 300,000 enslaved North Korean defectors in China.
                </p>
            </div>
            <div ref={scene4}>
                <h1 className='scene-title'>Mongolia</h1>
                <p>In February 2009, Yeonmi park and a small group of defectors were told how to escape to Mongolia, as it was the only country they could flee to without paying brokers. Yeonmi’s group was one of the groups to successfully cross the desert to Mongolia as it is now too dangerous. Yeonmi and her group, including one baby, crossed the desert at-40 degrees.
                Once the group reached Mongolia, they were put in a holding camp. It is not uncommon for Mongolian Soldiers to trick defectors into thinking they would be deported back to North Korea, Yeonmi remembers a group of defectors who came after her, where the guards didn’t tell her it was a trick in time and the a woman took poison.
                Yeonmi and her Mother endured months of interrogation, as it was common for North Korea to send spies to assassinate real defectors, or find information about defectors so their family members could be punished.
                </p>
            </div>
            <div ref={scene5}>
                <h1 className='scene-title'>South Korea</h1>
                <p>After passing months of screening, Yeonmi and her Mother were sent to South Korea as refugees, for more 2 months of interrogation. Yeonmi was then enrolled on a 3 month re-education programme, teaching Yeonmi how to integrate into South Korean culture, learning things like how to ride a subway and take a bus. 
                Yeonmi and her Mother then lived in public housing in the countryside. During this time Yeonmi studied and got her high school GED equivelant within just one year. Yeonmi had an educational equivalent grade of a 7 year old just a year before, when she did her high school placement exam.  
                Yeonmi then applied for university to study criminal justice in Seoul. During her time in Seoul, Yeonmi was asked to take part in an entertainment show, cast as the North Korean Paris Hilton. Yeonmi was convinced to do this, as the producers told her she may find her sister by doing this. Yeonmi did in fact find her sister because of this show. 
                There is heavy discrimination against North Koreans in South Korea. North Koreans tend to get blamed for the crime in South Korea. In 2018 a North Korean Mother and son died in the middle of Seoul from starvation. 
                </p>
            </div>
            <div ref={scene6}>
                <h1 className='scene-title'>America</h1>
                <p>Through university, Yeonmi attended a youth leaders conference in Ireland. Yeonmi was a delegate speaker, and spoke mainly about the her experiences and the issues in China. Yeonmi Park was then approached by Penguin with a book offer, Yeonmi then moved to New York to live near her agent, however Yeonmi wanted to continue studying during this time. Yeonmi attended New York Columbia university for the next four years.
                While at Columbia university, Yeonmi became very pessimistic about the western world. Yeonmi experienced politically correct, and ideological teaching. Yeonmi felt like she had to censor herself all over again and felt like she was being told how to think. Felt it was a waste of time, energy and money. 
                She now spends her time raising awareness of the North Korean regime, and its enablement by the Chinese Communist Party, but also the dangerous path she sees western society heading, with more surpression, censorship of speech and trends like guilt by group occurring.  
                Yeonmi spends her time speaking out and raising awareness as she realises the cost of keeping silent. Yeonmi Park is on the kill list of Kim Jon-Il.
                </p>
            </div>
        </div>
)
}
