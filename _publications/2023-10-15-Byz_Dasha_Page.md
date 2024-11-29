---
title: "Communication Compression for Byzantine Robust Learning: New Efficient Algorithms and Improved Rates"
collection: publications
permalink: /publication/Byz-DASHA-PAGE
excerpt: 'In this paper we introduce new SOTA algorithms in the realm of communication compression along with Byzantine robustness.'
date: 2022-09-01
venue: 'AISTATS'
paperurl: 'https://arxiv.org/pdf/2310.09804.pdf'
---
Byzantine robustness is an essential feature of algorithms for certain distributed optimization problems, typically encountered in collaborative/federated learning. These problems are usually huge-scale, implying that communication compression is also imperative for their resolution. These factors have spurred recent algorithmic and theoretical developments in the literature of Byzantine-robust learning with compression. In this paper, we contribute to this research area in two main directions. First, we propose a new Byzantine-robust method with compression -- Byz-DASHA-PAGE -- and prove that the new method has better convergence rate (for non-convex and Polyak-Lojasiewicz smooth optimization problems), smaller neighborhood size in the heterogeneous case, and tolerates more Byzantine workers under over-parametrization than the previous method with SOTA theoretical convergence guarantees (Byz-VR-MARINA). Secondly, we develop the first Byzantine-robust method with communication compression and error feedback -- Byz-EF21 -- along with its bidirectional compression version -- Byz-EF21-BC -- and derive the convergence rates for these methods for non-convex and Polyak-Lojasiewicz smooth case. We test the proposed methods and illustrate our theoretical findings in the numerical experiments.

[Download paper here](https://arxiv.org/pdf/2310.09804.pdf)