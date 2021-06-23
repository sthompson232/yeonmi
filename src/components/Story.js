import React, { useEffect, useRef } from 'react'
import { gsap, Power3 } from 'gsap'

export const Story = ({ counter }) => {
    const scene1 = useRef()
    const scene2 = useRef()
    const scene3 = useRef()
    const scene4 = useRef()
    const scene5 = useRef()
    const scene6 = useRef()

    const duration = 2
    const come = {opacity: 1, display: 'block', duration: duration}
    const go = {opacity: 0, display: 'none', duration: duration}

    useEffect(() => {
        counter === 0 ? gsap.to(scene1.current, come, duration) : gsap.to(scene1.current, go)
        counter === 1 ? gsap.to(scene2.current, come, duration) : gsap.to(scene2.current, go)
        counter === 2 ? gsap.to(scene3.current, come, duration) : gsap.to(scene3.current, go)
        counter === 3 ? gsap.to(scene4.current, come, duration) : gsap.to(scene4.current, go)
        counter === 4 ? gsap.to(scene5.current, come, duration) : gsap.to(scene5.current, go)
        counter === 5 ? gsap.to(scene6.current, come, duration) : gsap.to(scene6.current, go)
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit amet tellus cras adipiscing enim. Non blandit massa enim nec dui nunc mattis. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Pellentesque massa placerat duis ultricies lacus sed turpis. Quisque sagittis purus sit amet volutpat. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Leo in vitae turpis massa sed elementum tempus. Pretium quam vulputate dignissim suspendisse in est ante. Felis bibendum ut tristique et egestas. Aliquet eget sit amet tellus. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Sagittis nisl rhoncus mattis rhoncus urna neque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Id ornare arcu odio ut sem nulla pharetra diam sit. In aliquam sem fringilla ut morbi tincidunt. Felis imperdiet proin fermentum leo vel. Semper feugiat nibh sed pulvinar. Feugiat vivamus at augue eget arcu dictum.

            Interdum posuere lorem ipsum dolor sit amet. Aliquam purus sit amet luctus venenatis. Vel orci porta non pulvinar neque. Fames ac turpis egestas maecenas pharetra. Habitant morbi tristique senectus et. Lobortis scelerisque fermentum dui faucibus in ornare. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Velit scelerisque in dictum non. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Dolor magna eget est lorem. Aliquet bibendum enim facilisis gravida. Est sit amet facilisis magna etiam tempor orci eu. Arcu bibendum at varius vel pharetra vel turpis.

            Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Et netus et malesuada fames ac turpis. Vitae ultricies leo integer malesuada nunc. Aenean pharetra magna ac placerat vestibulum lectus mauris. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Augue interdum velit euismod in pellentesque massa placerat duis. Volutpat consequat mauris nunc congue nisi vitae suscipit. Sit amet nisl purus in mollis nunc sed id. In nibh mauris cursus mattis molestie. Feugiat nisl pretium fusce id. Eu mi bibendum neque egestas congue quisque egestas diam in. Eget gravida cum sociis natoque penatibus et magnis. Mattis vulputate enim nulla aliquet porttitor.

            Urna id volutpat lacus laoreet non. Aliquam purus sit amet luctus venenatis lectus magna fringilla. In tellus integer feugiat scelerisque. Nulla porttitor massa id neque aliquam vestibulum. Eget arcu dictum varius duis at. Tellus mauris a diam maecenas sed enim. Laoreet suspendisse interdum consectetur libero id faucibus. Egestas integer eget aliquet nibh praesent. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Sociis natoque penatibus et magnis dis parturient montes nascetur. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui.

            Duis at tellus at urna condimentum mattis pellentesque id nibh. Purus ut faucibus pulvinar elementum integer enim. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Aliquet eget sit amet tellus cras adipiscing enim eu. Eros donec ac odio tempor orci. Gravida quis blandit turpis cursus in hac habitasse. Commodo viverra maecenas accumsan lacus. Suscipit adipiscing bibendum est ultricies integer. Accumsan sit amet nulla facilisi morbi. Imperdiet dui accumsan sit amet nulla facilisi. At in tellus integer feugiat scelerisque varius morbi. In nibh mauris cursus mattis molestie. Sit amet porttitor eget dolor. Gravida neque convallis a cras semper auctor neque vitae. Ut venenatis tellus in metus.</p>
        </div>
        <div ref={scene2}>
            <h1 className='scene-title'>Father</h1>
            <p>Description2</p>
        </div>
        <div ref={scene3}>
            <h1 className='scene-title'>China</h1>
            <p>Description3</p>
        </div>
        <div ref={scene4}>
            <h1 className='scene-title'>Mongolia</h1>
            <p>Description4</p>
        </div>
        <div ref={scene5}>
            <h1 className='scene-title'>South Korea</h1>
            <p>Description5</p>
        </div>
        <div ref={scene6}>
            <h1 className='scene-title'>America</h1>
            <p>Description6</p>
        </div>
        </div>
)
}
