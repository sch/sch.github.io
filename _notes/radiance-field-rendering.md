---
---

Radiance fields are volumetric representations of a scene using neural networks.
Gaussian splatting is a technique to render these scenes efficiently by
rasterizing a stretched oval of color.

[Edward Ahn] has a nice, high-level overview of how neural radiance fields
differ from 3D gaussian splatting. In short: splatting is more akin to
rasterization, while NeRFs are more similar to ray tracing. It's a speed
optimization that requires additional preprocessing.

https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/
https://github.com/antimatter15/splat
https://arxiv.org/abs/2308.09713
https://github.com/huggingface/gsplat.js
[Edward Ahn]: https://edwardahn.me/writing/NeRFvs3DGS/
