function startGame1() {
  document.getElementById("game-area").innerHTML = "";
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1.8, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, 500);
  document.getElementById("game-area").appendChild(renderer.domElement);

  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  const planeGeometry = new THREE.PlaneGeometry(20, 20);
  const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = Math.PI / 2;
  scene.add(plane);

  camera.position.z = 10;
  camera.position.y = 5;
  camera.lookAt(sphere.position);

  let speed = 0;

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") speed = 0.1;
    else if (e.key === "ArrowLeft") speed = -0.1;
  });

  function animate() {
    requestAnimationFrame(animate);
    sphere.position.x += speed;
    renderer.render(scene, camera);
  }

  animate();
}
