---

title: Margallo Buckling Review Center — LMS & Enrollment Platform
category: project
-----------------

## Overview

Full-featured Laravel + Vue + Inertia.js enrollment and LMS platform built speculatively for a civil engineering board exam review center.

Designed to handle the complete student lifecycle from enrollment and payment verification to content delivery and progress monitoring.

## Key features

HLS video transcoding with AES-128 encryption, Cloudflare R2 storage. Installment payment tracking with admin approval workflow. GitHub-contribution-style reporting dashboard (Recharts + shadcn/ui). Batch management with automatic role revocation on batch closure. Discord-style announcement system with emoji reactions. Enrollment email notifications via Resend. Stepped multi-page enrollment form.

Role-based access control for administrators, staff, and students. Student enrollment management, payment monitoring, learning content delivery, and administrative reporting.

## Technical challenges solved

FFmpeg transcoding failures on 8GB video files (URL encoding, disk space on Windows/Laragon). Inertia.js reactive state bugs (local ref vs computed from page props).

Designed permissions architecture, enrollment workflows, payment approval processes, and reporting features to support real-world operational requirements.

## Technologies

Laravel, Vue.js, Inertia.js, MySQL, Tailwind CSS, shadcn/ui, Recharts, FFmpeg, Cloudflare R2, Resend, and AWS-compatible object storage.
