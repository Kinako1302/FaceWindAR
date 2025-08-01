import { loadGLTF } from "https://cdn.jsdelivr.net/npm/mind-ar@1.1.4/dist/loader/loader.js";

const mindarThree = new window.MINDAR.FACE.MindARThree({
  container: document.querySelector("#container"),
});

const { renderer, scene, camera } = mindarThree;

const start = async () => {
  const confettiTexture = new THREE.TextureLoader().load("confetti.png");
  const material = new THREE.SpriteMaterial({ map: confettiTexture });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(0.1, 0.1, 0.1)
  sprite.position.set(0.5, 0.2, 0); // 顔の右前あたり

  const anchor = mindarThree.addAnchor(1);
  anchor.group.add(sprite);

  // 簡単なアニメーション
  const animate = () => {
    sprite.position.x -= 0.01;
    if (sprite.position.x < -0.5) sprite.position.x = 0.5;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  await mindarThree.start();
  animate();
};

start();
