---
title: "Correlated Quantization for Faster Nonconvex Distributed Optimization"
collection: publications
permalink: /publication/Corr_Quant
excerpt: 'In this paper we focus on the use of correlated quantizers, introduced by Suresh et al. in 2022, and demonstrate how these quantizers offer benefits over traditional independent quantizers in terms of communication complexity.'
date: 2024-01-15
venue: ''
paperurl: 'https://arxiv.org/pdf/2401.05518.pdf'
---
Quantization (Alistarh et al., 2017) is an important (stochastic) compression technique that reduces the volume of transmitted bits during each communication round in distributed model training. Suresh et al. (2022) introduce correlated quantizers and show their advantages over independent counterparts by analyzing distributed SGD communication complexity. We analyze the forefront distributed non-convex optimization algorithm MARINA (Gorbunov et al., 2022) utilizing the proposed correlated quantizers and show that it outperforms the original MARINA and distributed SGD of Suresh et al. (2022) with regard to the communication complexity. We significantly refine the original analysis of MARINA without any additional assumptions using the weighted Hessian variance (Tyurin et al., 2022), and then we expand the theoretical framework of MARINA to accommodate a substantially broader range of potentially correlated and biased compressors, thus dilating the applicability of the method beyond the conventional independent unbiased compressor setup. Extensive experimental results corroborate our theoretical findings.


[Download paper here](https://arxiv.org/pdf/2401.05518.pdf)