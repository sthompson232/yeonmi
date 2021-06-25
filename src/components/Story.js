import React, { useEffect, useRef } from 'react'
import ReactDOM from "react-dom";
import { gsap, Power3 } from 'gsap'
import { useSelector } from "react-redux";

export const Story = ({ counter }) => {
    const scene1 = useRef()
    const scene2 = useRef()
    const scene3 = useRef()
    const scene4 = useRef()
    const scene5 = useRef()
    const scene6 = useRef()
    const scroller = useRef()

    const duration = useSelector(state => state.duration)

    useEffect(() => {
        const come = {opacity: 1, display: 'block', duration: duration, ease: Power3.easeIn, delay: duration}
        const go = {opacity: 0, display: 'none', duration: duration, ease: Power3.easeOut}
        counter === 0 ? gsap.to(scene1.current, come) : gsap.to(scene1.current, go)
        counter === 1 ? gsap.to(scene2.current, come) : gsap.to(scene2.current, go)
        counter === 2 ? gsap.to(scene3.current, come) : gsap.to(scene3.current, go)
        counter === 3 ? gsap.to(scene4.current, come) : gsap.to(scene4.current, go)
        counter === 4 ? gsap.to(scene5.current, come) : gsap.to(scene5.current, go)
        counter === 5 ? gsap.to(scene6.current, come) : gsap.to(scene6.current, go)
        setTimeout(function() {
            ReactDOM.findDOMNode(scroller.current).scrollTop = 0
        }, duration * 1000)
    }, [counter])

    return (
        <div style={{ 
                padding: 20, 
                textAlign:'start',
                maxHeight: '25vh',
                minHeight: '200px',
                overflowY: 'scroll',
            }}
            ref={scroller}
            >
            <div ref={scene1}>
                <h1 className='scene-title'>North Korea</h1>
                <hr />
                <p>Yeonmi Park was born on the 4th October 1993 in Hyesan, North Korea, one year before the North Korean famine of 1994-1998 - a result of the collapse of the Soviet Union, which no longer supported the North Korean regime. Yeonmi would grow up with many victims of starvation lying dead on the streets and in the hospitals. It is estimated that there were between 240,000 to 3.5 million deaths caused by the famine, in which people mostly died from hunger or infection. This famine is also referred to as the 'Arduous March'. Yeonmi and her family would survive these years by living on a diet of grasshoppers, dragonflies, and other insects. As well as tree bark, plants and flowers. Some North Koreans resorted to cannibalism to survive.</p>
                    
                <p> Her Mother was a nurse and her Father was a civil servant, and as well as suffering from the famine, Yeonmi, like many other North Koreans, grew up in absolute poverty. Her family were considered of the lowest class, due to North Korea's ‘guilty by association’ policy. This policy condemns 3 to 8 generations of a family, if one family member is found guilty of a crime. Yeonmi’s family were guilty by association because her great grandfather was a landowner before the North Korean regime.</p>
                
                <p className='facts'>Crimes as small as accidentally ripping a newspaper with Kim Jong-un's face on, can condemn the next three generations of a family with sentences at concentration camps.</p> 
                <p className='facts'>If one high ranking official defects from North Korea, the regime have been known to kill up to 30,000 people as a deterrant for future defectors.</p>
                <p className='facts'>As much of North Korea lives in absolute poverty, most resources are incredibly valuable. The regime gives assignments to children at a very young age. Yeonmi recollects as a school child, being asked to collect dog and human waste to be used as fertilizer.</p>

            </div>
            <div ref={scene2}>
                <h1 className='scene-title'>Father</h1>
                <hr />
                <p>Yeonmi’s Father, Park Jin-sik would trade sugar, spices and metals on the black market – this is a highly illegal activity in North Korea as North Koreans are forbidden to have any personal possessions or property. In 2001, when Yeonmi was 8 years old, her Father was discovered trading, and sent to a prison camp with an 11 year sentence. In order to support Yeonmi and her older sister, Yeonmi’s Mother would go away for months to find work, leaving Yeonmi and her sister alone.</p>

                <p className='facts'>Prison camps in North Korea involve unbearable labour. A lot of inmates die within the first three months of their sentences. In 2010, the UN did a three year investigation and the only resemblance they could find to these prison camps is the holocaust.</p> 
                <p className='facts'>Everything is considered to be owned by the North Korean state. Capitalism and freetrade is viewed as corrupt and maleviolent by nature. Wearing jeans can even send you to prison, as this is seen as a symbol of capitalism.</p>
                <p className='facts'>North Korea also have Kwalliso camps, which are different to their prison camps. Many inmates are born in these camps, and will spend their whole lives there. This is a result of the 'guilt by association' policy. These camps are influenced by Stalinist and Maoist prison camps.</p>
                
            </div>
            <div ref={scene3}>
                <h1 className='scene-title'>China</h1>
                <hr />
                <p>In 2007, motivated by hunger and in search of a better life, Yeonmi and her Mother fled to China after Yeonmi’s sister had already successfully crossed the border. While crossing the border, Yeomnmi's Mother was raped by the same human traffickers who were helping them cross the border. Once Yeonmi and her mother reached China, they were then priced by their traffickers to be sold into slavery. Yeonmi and her Mother were passed through many traffickers, and eventually separated at the age of 13. Yeonmi spent the next two years of her life with a violent and abusive Chinese trafficker. At this time Yeonmi was contemplating suicide, but was convinced not to by her trafficker, if he promised to find her Mother. Eventually the trafficker found Yeonmi's Mother, and bought her back.</p> 
                <p>It was at this time that Yeonmi also saw her Father again. He was released 4 years into his sentence on sick leave due to his illness and escaped to China with the help of their Yeonmi's trafficker. Yeonmi describes her Father returning from the prison camp an empty and broken man. Yeonmi’s Father died of cancer a few months after being reunited with his family.</p> 
                <p>Yeonmi’s trafficker could no longer afford to feed Yeonmi’s and her Mother due to his gambling addictions, and he eventually let them go. At the age of 13, Yeonmi would be forced to work in online chatrooms to earn money. Yeonmi was later helped by a group of Chinese Christians, who offered to help Yeonmi and her Mother relocate to Mongolia. In return, Yeonmi would have to prove her faith to the missionaries by memorising bible verses and fasting.</p>

                <p className='facts'>Yeonmi had no idea China existed when she defected, and only knew of the lights she saw across the border. North Koreans are not taught about the outside world, most North Koreans have never seen a map of the world, and do not know the existance of the internet. Most of North Korea does not have electricity.</p>
                <p className='facts'>North Korean defectors usually end up being sold into slavery or prostitution. North Korean women were seen as more valuable then men, due to the lack of women in China as a result of the one child policy.</p>
                <p className='facts'>There are estimated to be 300,000 enslaved North Korean defectors in China.</p>
            </div>
            <div ref={scene4}>
                <h1 className='scene-title'>Mongolia</h1>
                <p>In February 2009, Yeonmi, her Mother, and a small group of defectors crossed the Gobi desert into Mongolia. This was the only country North Koreans could flee to without paying brokers. Yeonmi and her group, including one baby, who had been told to pack and dress lightly, crossed the desert at temperatures of around -40 degrees.</p>
                <p>Once the group reached Mongolia, they were put in a holding camp.  Mongolian soldiers would trick the defectors into thinking they were going to be deported back to North Korea, Yeonmi remembers a group of defectors who came after her, when a woman poisoned herself as a result of the soldiers trick.
                Yeonmi and her Mother then endured months of interrogation in the Mongolian holding camp, before being sent to South Korea.</p> 
                <p className='facts'>It was common for North Korea to send spies to assassinate real defectors, or find information about defectors so their family members could be punished.</p>
            </div>
            <div ref={scene5}>
                <h1 className='scene-title'>South Korea</h1>
                <p>After passing months of screening, Yeonmi and her Mother were sent to South Korea as refugees, to then endure another 2 months of interrogation. Yeonmi was then enrolled on a 3 month re-education programme, teaching Yeonmi how to integrate into South Korean culture, learning new concepts like banking, and how to ride a subway and take a bus.</p> 
                <p>Yeonmi and her Mother then lived in public housing in the South Korean countryside. Yeonmi spent the next year studying and achieved her high school GED equivelant within just one year. Yeonmi had an educational equivalent grade of a 7 year old when she arrived in South Korea. Yeonmi then applied for university to study criminal justice in Seoul. During her time in Seoul, Yeonmi was asked to take part in an entertainment show, cast as the 'North Korean Paris Hilton'. Yeonmi was convinced to do this, only because the producers told her she may find her sister, who was still in China. Yeonmi later found her sister because of this show.</p> 
                <p className='facts'>There is heavy discrimination against North Koreans in South Korea. North Koreans are blamed for crime in South Korea and not viewed as equals. In 2018 a North Korean Mother and son died in the middle of Seoul from starvation.</p>
            </div>
            <div ref={scene6}>
                <h1 className='scene-title'>America</h1>
                <p>During her time at university, Yeonmi attended the One Young World 2014 Summit in Ireland. Yeonmi was a delegate speaker at this conference, speaking about her escape from North Korea. Yeonmi was then subsequently approached by Penguin with a book offer, Yeonmi then moved to New York to work on her book, however she wanted to continue studying during this time. Yeonmi attended New York Columbia university for the next four years.</p>
                <p>While at Columbia university, Yeonmi became very pessimistic about the western world. Yeonmi was imposed with censorship and ideological teachings at Columbia university, as well as recognising the emergence of dangerous trends such as group guilt, and guilt by association.</p>
                <p>Yeonmi Park now spends her time raising awareness of the North Korean regime, and its enablement and sponsorship by the Chinese Communist Party. Yeonmi also raises awareness of the dangerous path that western culture is heading.</p>  
            </div>
        </div>
)
}
