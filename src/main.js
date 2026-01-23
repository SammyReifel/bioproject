import * as THREE from 'three';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Scene setup
const canvas = document.getElementById('three-canvas');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf8fafc);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 5, 80);

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(10, 20, 10);
scene.add(directionalLight);

// Colors matching biology diagrams
const C = {
  presynaptic: 0x93c5fd,
  postsynaptic: 0x86efac,
  vesicle: 0xfcd34d,
  ach: 0x374151,
  receptor: 0xfbbf24,
  gprotein: 0xa78bfa,
  ion_na: 0x3b82f6,
  ion_ca: 0xfbbf24,
  enzyme: 0x94a3b8,
  mito: 0xfb923c,
  membrane: 0x6ee7b7
};

const M = (c, o = 1) => new THREE.MeshLambertMaterial({ color: c, transparent: o < 1, opacity: o });

// ========================================
// ONE UNIFIED SYNAPSE - Camera moves through it
// ========================================
const mainScene = new THREE.Group();
scene.add(mainScene);

// -- PRESYNAPTIC TERMINAL (top) --
const presynapticGroup = new THREE.Group();
presynapticGroup.position.set(0, 25, 0);

// Axon terminal bulb
const terminalBody = new THREE.Mesh(
  new THREE.SphereGeometry(12, 32, 32),
  M(C.presynaptic, 0.9)
);
terminalBody.scale.set(1.2, 0.8, 1);
presynapticGroup.add(terminalBody);

// Axon coming from top
const axon = new THREE.Mesh(
  new THREE.CylinderGeometry(4, 5, 20, 16),
  M(C.presynaptic, 0.9)
);
axon.position.y = 18;
presynapticGroup.add(axon);

// Mitochondria inside
const mito = new THREE.Mesh(
  new THREE.CapsuleGeometry(1.5, 5, 8, 16),
  M(C.mito)
);
mito.position.set(-5, 2, 0);
mito.rotation.z = 0.5;
presynapticGroup.add(mito);

// Vesicles (yellow circles with dark ACh dots inside)
const vesicles = [];
const vesiclePositions = [
  [-4, -3, 2], [-1, -4, 0], [3, -3, -1], [5, -2, 2], [-2, -2, -2],
  [0, -5, 1], [4, -5, -2], [-5, -5, 0]
];
vesiclePositions.forEach((pos, i) => {
  const vGroup = new THREE.Group();
  vGroup.userData.dots = [];
  
  // Vesicle shell
  const shell = new THREE.Mesh(
    new THREE.SphereGeometry(2, 24, 24),
    M(C.vesicle, 0.85)
  );
  vGroup.add(shell);
  vGroup.userData.shell = shell;
  
  // ACh dots inside
  for (let j = 0; j < 4; j++) {
    const dot = new THREE.Mesh(
      new THREE.SphereGeometry(0.35, 12, 12),
      M(C.ach)
    );
    dot.visible = false;
    const angle = (j / 4) * Math.PI * 2;
    dot.position.set(Math.cos(angle) * 0.8, Math.sin(angle) * 0.8, 0);
    vGroup.add(dot);
    vGroup.userData.dots.push(dot);
  }
  
  vGroup.position.set(...pos);
  vGroup.userData.originalY = pos[1];
  vGroup.userData.originalPos = new THREE.Vector3(...pos);
  vGroup.userData.filled = 0;
  vesicles.push(vGroup);
  presynapticGroup.add(vGroup);
});

mainScene.add(presynapticGroup);

// -- SYNAPTIC CLEFT (middle) - ACh molecules (hidden until released) --
const cleftACh = [];
for (let i = 0; i < 15; i++) {
  const ach = new THREE.Mesh(
    new THREE.SphereGeometry(0.6, 16, 16),
    M(C.ach)
  );
  ach.position.set(
    (Math.random() - 0.5) * 25,
    5 + Math.random() * 8,
    (Math.random() - 0.5) * 10
  );
  ach.userData.originalPos = ach.position.clone();
  ach.visible = false; // Hidden by default
  cleftACh.push(ach);
  mainScene.add(ach);
}

// -- POSTSYNAPTIC MEMBRANE (bottom) --
const postsynapticGroup = new THREE.Group();
postsynapticGroup.position.set(0, -8, 0);

// Membrane surface
const membrane = new THREE.Mesh(
  new THREE.BoxGeometry(50, 4, 15),
  M(C.postsynaptic, 0.9)
);
postsynapticGroup.add(membrane);

// Receptors embedded in membrane
const receptors = [];

// Nicotinic receptors (ion channels) - yellow tubes
[-15, 0, 15].forEach((x, i) => {
  const receptorGroup = new THREE.Group();
  
  // Channel body
  const channel = new THREE.Mesh(
    new THREE.CylinderGeometry(2, 2.5, 6, 16),
    M(C.receptor)
  );
  receptorGroup.add(channel);
  
  // Pore (dark opening)
  const pore = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1, 6.5, 16),
    M(0x374151)
  );
  receptorGroup.add(pore);
  
  // Binding sites on top
  const site = new THREE.Mesh(
    new THREE.TorusGeometry(1.8, 0.4, 8, 16),
    M(0xfef08a)
  );
  site.position.y = 3;
  site.rotation.x = Math.PI / 2;
  receptorGroup.add(site);
  
  receptorGroup.position.set(x, 2, 0);
  receptorGroup.userData.type = 'nicotinic';
  receptors.push(receptorGroup);
  postsynapticGroup.add(receptorGroup);
});

// Muscarinic receptors (G-protein coupled) - pink with purple G-protein
[-8, 8].forEach((x, i) => {
  const receptorGroup = new THREE.Group();
  
  // Receptor body (serpentine shape simplified)
  const body = new THREE.Mesh(
    new THREE.CylinderGeometry(1.8, 2.2, 5, 16),
    M(0xf472b6)
  );
  receptorGroup.add(body);
  
  // G-protein subunits below membrane
  const alpha = new THREE.Mesh(
    new THREE.SphereGeometry(1.5, 16, 16),
    M(C.gprotein)
  );
  alpha.position.set(0, -4, 0);
  receptorGroup.add(alpha);
  
  const beta = new THREE.Mesh(
    new THREE.SphereGeometry(1, 16, 16),
    M(0x818cf8)
  );
  beta.position.set(1.5, -3.5, 0);
  receptorGroup.add(beta);
  
  const gamma = new THREE.Mesh(
    new THREE.SphereGeometry(0.7, 16, 16),
    M(0xc4b5fd)
  );
  gamma.position.set(2.2, -3, 0);
  receptorGroup.add(gamma);
  
  receptorGroup.position.set(x, 2, 0);
  receptorGroup.userData.type = 'muscarinic';
  receptors.push(receptorGroup);
  postsynapticGroup.add(receptorGroup);
});

mainScene.add(postsynapticGroup);

// -- IONS (for transduction animation) --
const ions = [];
for (let i = 0; i < 20; i++) {
  const isNa = Math.random() > 0.3;
  const ion = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 12, 12),
    M(isNa ? C.ion_na : C.ion_ca)
  );
  ion.position.set(
    (Math.random() - 0.5) * 6,
    20 + Math.random() * 10,
    (Math.random() - 0.5) * 4
  );
  ion.userData.startY = ion.position.y;
  ion.visible = false;
  ions.push(ion);
  mainScene.add(ion);
}

// -- ENZYME (for termination) --
const enzymeGroup = new THREE.Group();
const enzyme = new THREE.Mesh(
  new THREE.SphereGeometry(3, 24, 24),
  M(C.enzyme)
);
enzyme.scale.set(1, 0.7, 1);
enzymeGroup.add(enzyme);

// Active site
const activeSite = new THREE.Mesh(
  new THREE.SphereGeometry(1, 16, 16),
  M(0x64748b)
);
activeSite.position.set(2.5, 0.5, 0);
enzymeGroup.add(activeSite);

enzymeGroup.position.set(20, 8, 0);
enzymeGroup.visible = false;
mainScene.add(enzymeGroup);

// -- ACh BREAKDOWN PRODUCTS (for termination animation) --
const breakdownProducts = [];
for (let i = 0; i < 8; i++) {
  // Choline (larger piece)
  const choline = new THREE.Mesh(
    new THREE.SphereGeometry(0.4, 12, 12),
    M(0x60a5fa) // Blue
  );
  choline.visible = false;
  choline.userData.type = 'choline';
  breakdownProducts.push(choline);
  mainScene.add(choline);
  
  // Acetate (smaller piece)
  const acetate = new THREE.Mesh(
    new THREE.SphereGeometry(0.25, 12, 12),
    M(0xfbbf24) // Yellow
  );
  acetate.visible = false;
  acetate.userData.type = 'acetate';
  breakdownProducts.push(acetate);
  mainScene.add(acetate);
}

// -- SYNTHESIS COMPONENTS (for synthesis animation) --
const synthesisGroup = new THREE.Group();
synthesisGroup.position.set(0, 25, 0);
synthesisGroup.visible = false;

// Choline coming in
const cholineIn = new THREE.Mesh(
  new THREE.SphereGeometry(0.8, 16, 16),
  M(0x60a5fa)
);
cholineIn.position.set(-10, 0, 0);
synthesisGroup.add(cholineIn);

// Acetyl-CoA from mitochondria
const acetylCoA = new THREE.Mesh(
  new THREE.SphereGeometry(0.6, 16, 16),
  M(0xfbbf24)
);
acetylCoA.position.set(-5, 3, 0);
synthesisGroup.add(acetylCoA);

// Enzyme (ChAT)
const chatEnzyme = new THREE.Mesh(
  new THREE.SphereGeometry(1.5, 16, 16),
  M(0x34d399)
);
chatEnzyme.scale.set(1, 0.6, 1);
chatEnzyme.position.set(-3, 0, 0);
synthesisGroup.add(chatEnzyme);

// New ACh being made
const newAch = new THREE.Mesh(
  new THREE.SphereGeometry(0.6, 16, 16),
  M(C.ach)
);
newAch.position.set(0, 0, 0);
newAch.visible = false;
synthesisGroup.add(newAch);

mainScene.add(synthesisGroup);

// -- MUSCLE FIBERS (for response animation) --
const muscleGroup = new THREE.Group();
muscleGroup.position.set(0, -25, 0);
muscleGroup.visible = false;

const muscleFibers = [];
for (let i = 0; i < 5; i++) {
  const fiber = new THREE.Mesh(
    new THREE.CapsuleGeometry(1.5, 20, 8, 16),
    M(0xfca5a5)
  );
  fiber.rotation.z = Math.PI / 2;
  fiber.position.set(0, i * 4, 0);
  fiber.userData.originalScaleX = 1;
  muscleFibers.push(fiber);
  muscleGroup.add(fiber);
}
mainScene.add(muscleGroup);

// ========================================
// CAMERA POSITIONS FOR EACH SECTION
// ========================================
const cameraViews = [
  // 0: Intro - wide view of whole scene
  { pos: { x: 35, y: 15, z: 70 }, look: { x: 0, y: 5, z: 0 } },
  // 1: Ligand - focus on ACh in cleft
  { pos: { x: 30, y: 10, z: 40 }, look: { x: 0, y: 8, z: 0 } },
  // 2: Synthesis - focus on presynaptic terminal and vesicles
  { pos: { x: 30, y: 30, z: 45 }, look: { x: 0, y: 25, z: 0 } },
  // 3: Receptors - focus on postsynaptic membrane
  { pos: { x: 30, y: -5, z: 40 }, look: { x: 0, y: -5, z: 0 } },
  // 4: Transduction - zoomed out to show full neuron-to-cell journey
  { pos: { x: 45, y: 5, z: 75 }, look: { x: 0, y: 5, z: 0 } },
  // 5: Response - show muscle below membrane
  { pos: { x: 35, y: -15, z: 50 }, look: { x: 0, y: -20, z: 0 } },
  // 6: Termination - show enzyme area
  { pos: { x: 35, y: 12, z: 35 }, look: { x: 15, y: 8, z: 0 } },
  // 7: Imbalance - wide dramatic view
  { pos: { x: 40, y: 15, z: 65 }, look: { x: 0, y: 5, z: 0 } }
];

let currentSection = 0;
const currentLookAt = new THREE.Vector3(0, 5, 0);
let synthesisTL = null;
let exocytosisTL = null;

// ========================================
// SCROLL HANDLING
// ========================================
const sections = document.querySelectorAll('.content-section');
const progressFill = document.querySelector('.progress-fill');
const navDots = document.querySelectorAll('.nav-dot');

sections.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top center',
    end: 'bottom center',
    onEnter: () => activateSection(index),
    onEnterBack: () => activateSection(index)
  });
});

ScrollTrigger.create({
  trigger: '.scroll-container',
  start: 'top top',
  end: 'bottom bottom',
  onUpdate: (self) => {
    progressFill.style.width = `${self.progress * 100}%`;
  }
});

function activateSection(index) {
  if (currentSection === index) return;
  currentSection = index;
  
  sections.forEach((s, i) => s.classList.toggle('active', i === index));
  navDots.forEach((d, i) => d.classList.toggle('active', i === index));
  
  const view = cameraViews[index];
  
  // Animate camera
  gsap.to(camera.position, {
    x: view.pos.x,
    y: view.pos.y,
    z: view.pos.z,
    duration: 1.5,
    ease: 'power2.inOut'
  });
  
  gsap.to(currentLookAt, {
    x: view.look.x,
    y: view.look.y,
    z: view.look.z,
    duration: 1.5,
    ease: 'power2.inOut'
  });
  
  // Section-specific visibility/animations
  handleSectionEffects(index);
}

function handleSectionEffects(index) {
  // Reset all section-specific elements
  ions.forEach(ion => ion.visible = false);
  enzymeGroup.visible = false;
  synthesisGroup.visible = false;
  muscleGroup.visible = false;
  breakdownProducts.forEach(p => p.visible = false);
  if (synthesisTL) {
    synthesisTL.kill();
    synthesisTL = null;
  }
  if (exocytosisTL) {
    exocytosisTL.kill();
    exocytosisTL = null;
  }
  gsap.killTweensOf([cholineIn.position, acetylCoA.position, newAch, newAch.position]);
  gsap.killTweensOf(newAch.scale);
  gsap.killTweensOf(muscleFibers.map(f => f.scale));
  gsap.killTweensOf(cleftACh.map(a => a.position));
  gsap.killTweensOf(cleftACh.map(a => a.scale));
  gsap.killTweensOf(vesicles.map(v => v.position));
  gsap.killTweensOf(vesicles.map(v => v.scale));
  gsap.killTweensOf(vesicles.map(v => v.userData.shell.scale));
  
  // Reset neuron opacity
  terminalBody.material.opacity = 0.9;
  axon.material.opacity = 0.9;

  // Reset vesicle docking state
  vesicles.forEach(v => {
    v.position.copy(v.userData.originalPos);
    v.scale.set(1, 1, 1);
    v.userData.shell.scale.set(1, 1, 1);
  });
  
  // Reset and hide ACh
  cleftACh.forEach((ach, i) => {
    ach.visible = false;
    ach.scale.set(1, 1, 1);
    ach.position.set(
      (Math.random() - 0.5) * 25,
      5 + Math.random() * 8,
      (Math.random() - 0.5) * 10
    );
    ach.userData.originalPos.copy(ach.position);
  });
  
  switch(index) {
    case 1: // Ligand - show ACh in cleft
      cleftACh.forEach((ach, i) => {
        if (i < 10) ach.visible = true;
      });
      break;

    case 2: // Synthesis - show ACh being made, make neuron transparent
      synthesisGroup.visible = true;
      newAch.visible = false;
      
      // Make presynaptic terminal transparent to see inside
      terminalBody.material.opacity = 0.3;
      axon.material.opacity = 0.3;
      
      // Animate choline moving toward enzyme
      gsap.fromTo(cholineIn.position, 
        { x: -12 },
        { x: -4, duration: 1.5, ease: 'power1.inOut', repeat: -1, repeatDelay: 2 }
      );
      
      // Animate acetyl-CoA moving from mito toward enzyme
      gsap.fromTo(acetylCoA.position,
        { x: -6, y: 4 },
        { x: -3, y: 1, duration: 1.2, delay: 0.3, ease: 'power1.inOut', repeat: -1, repeatDelay: 2.3 }
      );

      vesicles.forEach(v => {
        v.userData.filled = 0;
        v.userData.dots.forEach(d => {
          d.visible = false;
          d.scale.set(1, 1, 1);
        });
      });

      {
        const fillTargets = vesicles.slice(0, 5);
        let targetV = fillTargets[0];
        let cycle = 0;

        synthesisTL = gsap.timeline({ repeat: -1, repeatDelay: 0.35 });
        synthesisTL.to({}, {
          duration: 0.01,
          onStart: () => {
            targetV = fillTargets.find(v => v.userData.filled < v.userData.dots.length) || fillTargets[cycle % fillTargets.length];
            newAch.visible = true;
            newAch.position.set(0, 0, 0);
            newAch.scale.set(0, 0, 0);
          }
        });
        synthesisTL.to(newAch.scale, { x: 1, y: 1, z: 1, duration: 0.35, ease: 'back.out(3)' });
        synthesisTL.to(newAch.position, {
          x: () => targetV.position.x,
          y: () => targetV.position.y,
          z: () => targetV.position.z,
          duration: 0.9,
          ease: 'power2.inOut'
        });
        synthesisTL.to(newAch.scale, {
          x: 0, y: 0, z: 0,
          duration: 0.25,
          ease: 'power1.in',
          onComplete: () => {
            if (targetV.userData.filled < targetV.userData.dots.length) {
              const dot = targetV.userData.dots[targetV.userData.filled];
              dot.visible = true;
              dot.scale.set(0, 0, 0);
              gsap.to(dot.scale, { x: 1, y: 1, z: 1, duration: 0.2, ease: 'back.out(3)' });
              targetV.userData.filled += 1;
              gsap.fromTo(targetV.scale, { x: 1, y: 1, z: 1 }, { x: 1.08, y: 1.08, z: 1.08, duration: 0.15, yoyo: true, repeat: 1, ease: 'power1.inOut' });
            }
            newAch.visible = false;
            newAch.position.set(0, 0, 0);
            newAch.scale.set(1, 1, 1);
            cycle += 1;
          }
        });
      }
      break;
      
    case 4: // Transduction - exocytosis: vesicles dock/fuse/release ACh
      {
        const dockVesicles = vesicles.slice(0, 3);
        const dockXs = [-10, 0, 10];
        const dockY = -10;
        const receptorXs = [-15, 0, 15];

        dockVesicles.forEach(v => {
          v.position.copy(v.userData.originalPos);
          v.userData.shell.scale.set(1, 1, 1);
          v.userData.dots.forEach(d => (d.visible = true));
          v.userData.filled = v.userData.dots.length;
        });

        cleftACh.forEach(a => {
          a.visible = false;
          a.scale.set(1, 1, 1);
        });

        exocytosisTL = gsap.timeline({ repeat: -1, repeatDelay: 0.25 });

        dockVesicles.forEach((v, vi) => {
          const dockX = dockXs[vi];
          const receptorX = receptorXs[vi];
          const achStartIndex = vi * 4;

          exocytosisTL.to(v.position, {
            x: dockX,
            y: dockY,
            z: 0,
            duration: 0.9,
            ease: 'power2.inOut'
          }, vi === 0 ? 0 : '+=0.4');

          exocytosisTL.to(v.userData.shell.scale, {
            y: 0.65,
            duration: 0.2,
            ease: 'power1.inOut'
          }, '<');

          exocytosisTL.add(() => {
            v.userData.dots.forEach(d => (d.visible = false));
            const wp = new THREE.Vector3();
            v.getWorldPosition(wp);

            cleftACh.slice(achStartIndex, achStartIndex + 4).forEach((ach, i) => {
              ach.visible = true;
              ach.scale.set(0, 0, 0);
              ach.position.copy(wp);

              const delay = i * 0.08;
              gsap.to(ach.scale, { x: 1, y: 1, z: 1, duration: 0.25, delay, ease: 'back.out(3)' });
              gsap.to(ach.position, {
                x: receptorX + (Math.random() - 0.5) * 6,
                y: 10,
                z: (Math.random() - 0.5) * 8,
                duration: 0.6,
                delay,
                ease: 'power2.out'
              });
              gsap.to(ach.position, {
                x: receptorX + (Math.random() - 0.5) * 2,
                y: -25,
                z: 0,
                duration: 1.9,
                delay: delay + 0.65,
                ease: 'power1.in',
                onComplete: () => {
                  ach.visible = false;
                  ach.scale.set(1, 1, 1);
                }
              });
            });
          }, '<0.05');

          exocytosisTL.to(v.userData.shell.scale, {
            y: 1,
            duration: 0.2,
            ease: 'power1.inOut'
          }, '<0.15');

          exocytosisTL.to(v.position, {
            x: v.userData.originalPos.x,
            y: v.userData.originalPos.y,
            z: v.userData.originalPos.z,
            duration: 0.9,
            ease: 'power2.inOut'
          }, '+=2.2');

          exocytosisTL.add(() => {
            v.userData.dots.forEach(d => (d.visible = true));
          }, '<');
        });
      }
      break;
      
    case 5: // Response - show muscle contraction
      muscleGroup.visible = true;
      muscleFibers.forEach((fiber, i) => {
        gsap.to(fiber.scale, {
          x: 0.7, // Contract (shorten)
          y: 1.3, // Thicken
          duration: 0.5,
          delay: i * 0.1,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1,
          repeatDelay: 0.5
        });
      });
      break;
      
    case 6: // Termination - ACh gets eaten by enzyme and disappears
      enzymeGroup.visible = true;
      enzymeGroup.position.set(5, 8, 0);
      
      gsap.fromTo(enzymeGroup.scale,
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1, duration: 0.6, ease: 'back.out' }
      );
      
      // Show ACh dots that will be eaten
      cleftACh.forEach((ach, i) => {
        ach.visible = true;
        const startX = (Math.random() - 0.5) * 30;
        const startY = 5 + Math.random() * 10;
        ach.position.set(startX, startY, (Math.random() - 0.5) * 5);
        
        // Move toward enzyme
        gsap.to(ach.position, {
          x: 5,
          y: 8,
          z: 0,
          duration: 1.5 + Math.random() * 0.5,
          delay: i * 0.3,
          ease: 'power2.in',
          onComplete: () => {
            // Disappear when eaten
            ach.visible = false;
          }
        });
      });
      
      // Pulse enzyme as it "eats"
      gsap.to(enzymeGroup.scale, {
        x: 1.2, y: 1.2, z: 1.2,
        duration: 0.2,
        delay: 1.5,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: 10,
        onRepeat: () => {
          // Reset and show more ACh to eat
          cleftACh.forEach((ach, i) => {
            if (!ach.visible) {
              ach.visible = true;
              ach.position.set(
                (Math.random() - 0.5) * 30,
                5 + Math.random() * 10,
                (Math.random() - 0.5) * 5
              );
              gsap.to(ach.position, {
                x: 5, y: 8, z: 0,
                duration: 1.5,
                ease: 'power2.in',
                onComplete: () => { ach.visible = false; }
              });
            }
          });
        }
      });
      break;
      
    case 7: // Imbalance - show blocked enzyme and accumulated ACh
      enzymeGroup.visible = true;
      enzymeGroup.position.set(15, 8, 0);
      
      // X mark over enzyme (blocked)
      gsap.to(enzymeGroup.rotation, {
        z: 0.3,
        duration: 0.5,
        yoyo: true,
        repeat: -1
      });

      // Show completion banner
      const banner = document.getElementById('completion-banner');
      if (banner) {
        banner.classList.remove('hidden');
      }
      break;
  }
}

navDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    sections[i].scrollIntoView({ behavior: 'smooth' });
  });
});

// ========================================
// ANIMATION LOOP
// ========================================
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();
  
  // Gentle float animation for vesicles
  vesicles.forEach((v, i) => {
    v.position.y = v.userData.originalY + Math.sin(t * 0.5 + i) * 0.3;
  });
  
  // Float ACh in cleft - only when not in transduction or termination sections
  if (currentSection !== 2 && currentSection !== 4 && currentSection !== 6) {
    cleftACh.forEach((ach, i) => {
      ach.position.y = ach.userData.originalPos.y + Math.sin(t * 0.8 + i * 0.5) * 0.5;
      ach.position.x = ach.userData.originalPos.x + Math.sin(t * 0.3 + i) * 0.3;
    });
  }
  
  // Update camera look-at
  camera.lookAt(currentLookAt);
  
  renderer.render(scene, camera);
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onResize);
sections[0].classList.add('active');
animate();

// Mobile warning dismissal
const warningModal = document.getElementById('mobile-warning');
const dismissBtn = document.getElementById('dismiss-warning');

if (dismissBtn && warningModal) {
  dismissBtn.addEventListener('click', () => {
    warningModal.classList.add('dismissed');
  });
}

// Completion banner handling
const completionBanner = document.getElementById('completion-banner');
const reloadBtn = document.getElementById('reload-btn');
const closeBannerBtn = document.getElementById('close-banner');

if (reloadBtn) {
  reloadBtn.addEventListener('click', () => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    window.location.reload();
  });
}

if (closeBannerBtn && completionBanner) {
  closeBannerBtn.addEventListener('click', () => {
    completionBanner.classList.add('hidden');
  });
}
