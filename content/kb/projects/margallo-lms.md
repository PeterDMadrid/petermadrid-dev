---
title: Margallo Buckling Review Center — LMS & Enrollment Platform
category: project
---

## Overview

Full-featured Laravel + Vue + Inertia.js enrollment and LMS platform built speculatively for a civil engineering board exam review center.

## Key features

HLS video transcoding with AES-128 encryption, Cloudflare R2 storage. Installment payment tracking with admin approval workflow. GitHub-contribution-style reporting dashboard (Recharts + shadcn/ui). Batch management with automatic role revocation on batch closure. Discord-style announcement system with emoji reactions. Enrollment email notifications via Resend. Stepped multi-page enrollment form.

## Technical challenges solved

FFmpeg transcoding failures on 8GB video files (URL encoding, disk space on Windows/Laragon). Inertia.js reactive state bugs (local ref vs computed from page props).