import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Home, Search, Heart, MessageCircle, User } from "lucide-react";

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

